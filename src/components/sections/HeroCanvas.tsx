'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    
    // We do NOT set a background color here to keep it transparent.
    // The canvas will sit on top of the DOM gradient.
    
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 120;

    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: 'high-performance'
    });
    
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Cap pixel ratio for perf
    containerRef.current.appendChild(renderer.domElement);

    // --- 2. Geometry & Materials ---
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // Neural Nodes
    const nodeCount = 300;
    const nodePositions = new Float32Array(nodeCount * 3);
    const nodeVelocities: THREE.Vector3[] = [];
    const maxRadius = 60;

    for (let i = 0; i < nodeCount; i++) {
      // Spherical distribution
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      const r = maxRadius * Math.cbrt(Math.random()); // Even volume distribution

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      nodePositions[i * 3] = x;
      nodePositions[i * 3 + 1] = y;
      nodePositions[i * 3 + 2] = z;

      // Subtle flow velocities
      nodeVelocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05,
          (Math.random() - 0.5) * 0.05
        )
      );
    }

    const nodesGeometry = new THREE.BufferGeometry();
    nodesGeometry.setAttribute('position', new THREE.BufferAttribute(nodePositions, 3));

    // Custom circle sprite for points
    const createCircleTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 32;
      canvas.height = 32;
      const ctx = canvas.getContext('2d')!;
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.2, 'rgba(217, 232, 226, 0.8)'); // Mint
      gradient.addColorStop(1, 'rgba(17, 76, 90, 0)'); // Nocturnal transparent
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
      return new THREE.CanvasTexture(canvas);
    };

    const nodesMaterial = new THREE.PointsMaterial({
      size: 1.5,
      map: createCircleTexture(),
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      color: 0xffffff,
      opacity: 0.8
    });

    const nodesMesh = new THREE.Points(nodesGeometry, nodesMaterial);
    mainGroup.add(nodesMesh);

    // Connections (Lines)
    const maxLines = nodeCount * 4; 
    const linePositions = new Float32Array(maxLines * 6); // 2 vertices per line, 3 coords each
    const lineColors = new Float32Array(maxLines * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
    lineGeometry.setAttribute('color', new THREE.BufferAttribute(lineColors, 3));
    
    // We'll update the lines dynamically in the loop, so set drawRange
    lineGeometry.setDrawRange(0, 0);

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.3,
      depthWrite: false,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    mainGroup.add(linesMesh);

    // Colors for gradient lines
    const colorMint = new THREE.Color('#D9E8E2');
    const colorForsythia = new THREE.Color('#FFC801');
    const colorNocturnal = new THREE.Color('#114C5A');

    // --- 3. Interaction (Mouse Parallax) ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', onMouseMove);

    // --- 4. Animation Loop ---
    let animationFrameId: number;
    let lastTime = performance.now();
    const fpsInterval = 1000 / 60; // Cap at 60fps

    const animate = (time: number) => {
      animationFrameId = requestAnimationFrame(animate);

      // Check if tab is visible
      if (document.hidden) return;

      const elapsed = time - lastTime;
      if (elapsed < fpsInterval) return; // Throttle
      lastTime = time - (elapsed % fpsInterval);

      // Parallax easing
      targetX = mouseX * 15;
      targetY = mouseY * 15;
      
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY - camera.position.y) * 0.05;
      camera.lookAt(scene.position);

      // Rotate whole group
      mainGroup.rotation.y += 0.001;
      mainGroup.rotation.x += 0.0005;

      // Update Node positions (Particle flow)
      const positions = nodesGeometry.attributes.position.array as Float32Array;
      for (let i = 0; i < nodeCount; i++) {
        const i3 = i * 3;
        
        // Flow
        positions[i3] += nodeVelocities[i].x;
        positions[i3 + 1] += nodeVelocities[i].y;
        positions[i3 + 2] += nodeVelocities[i].z;

        // Bounce back if they go too far
        const distSq = positions[i3]**2 + positions[i3+1]**2 + positions[i3+2]**2;
        if (distSq > maxRadius * maxRadius) {
          nodeVelocities[i].multiplyScalar(-1);
        }
      }
      nodesGeometry.attributes.position.needsUpdate = true;

      // Update Lines
      let lineIndex = 0;
      let colorIndex = 0;
      const connectionDist = 15;
      const connectionDistSq = connectionDist * connectionDist;

      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          const dx = positions[i * 3] - positions[j * 3];
          const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
          const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
          const distSq = dx * dx + dy * dy + dz * dz;

          if (distSq < connectionDistSq && lineIndex < maxLines * 2) {
            // Add Line
            linePositions[lineIndex * 3] = positions[i * 3];
            linePositions[lineIndex * 3 + 1] = positions[i * 3 + 1];
            linePositions[lineIndex * 3 + 2] = positions[i * 3 + 2];

            linePositions[(lineIndex + 1) * 3] = positions[j * 3];
            linePositions[(lineIndex + 1) * 3 + 1] = positions[j * 3 + 1];
            linePositions[(lineIndex + 1) * 3 + 2] = positions[j * 3 + 2];

            // Distance-based opacity/color fade
            const alpha = 1.0 - (distSq / connectionDistSq);
            
            // Assign gradient color based on alpha intensity
            const c = alpha > 0.8 ? colorForsythia : (alpha > 0.4 ? colorMint : colorNocturnal);

            lineColors[colorIndex * 3] = c.r * alpha;
            lineColors[colorIndex * 3 + 1] = c.g * alpha;
            lineColors[colorIndex * 3 + 2] = c.b * alpha;

            lineColors[(colorIndex + 1) * 3] = c.r * alpha;
            lineColors[(colorIndex + 1) * 3 + 1] = c.g * alpha;
            lineColors[(colorIndex + 1) * 3 + 2] = c.b * alpha;

            lineIndex += 2;
            colorIndex += 2;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineIndex);
      lineGeometry.attributes.position.needsUpdate = true;
      lineGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate(performance.now());

    // --- 5. Resize Handler ---
    const onWindowResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', onWindowResize);

    // --- 6. Cleanup on Unmount ---
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId);

      // Deep dispose
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points || object instanceof THREE.LineSegments) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(m => m.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });

      // Dispose textures
      nodesMaterial.map?.dispose();

      renderer.dispose();
      
      if (containerRef.current && renderer.domElement) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

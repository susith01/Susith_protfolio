import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const BackgroundCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 80;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: !isMobile,
      powerPreference: 'high-performance',
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1 : 1.5));
    container.appendChild(renderer.domElement);

    // Particle Cloud Geometry
    const particleCount = isMobile ? 70 : 160;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    const cyanColor = new THREE.Color(0x06b6d4);
    const purpleColor = new THREE.Color(0x8b5cf6);
    const blueColor = new THREE.Color(0x3b82f6);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 160;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 80;

      velocities.push({
        x: (Math.random() - 0.5) * 0.04,
        y: (Math.random() - 0.5) * 0.04,
        z: (Math.random() - 0.5) * 0.02,
      });

      const mixed = Math.random() > 0.5 ? cyanColor : Math.random() > 0.5 ? purpleColor : blueColor;
      colors[i * 3] = mixed.r;
      colors[i * 3 + 1] = mixed.g;
      colors[i * 3 + 2] = mixed.b;
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Custom Canvas Texture for smooth circular particles
    const canvas = document.createElement('canvas');
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
      gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.8)');
      gradient.addColorStop(0.8, 'rgba(139, 92, 246, 0.2)');
      gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 32, 32);
    }
    const particleTexture = new THREE.CanvasTexture(canvas);

    const particleMaterial = new THREE.PointsMaterial({
      size: isMobile ? 2.5 : 3.2,
      vertexColors: true,
      map: particleTexture,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Neural Network Connecting Lines
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.15,
      blending: THREE.AdditiveBlending,
    });

    const maxConnections = isMobile ? 80 : 220;
    const linePositions = new Float32Array(maxConnections * 6);
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));

    const lineMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lineMesh);

    // Mouse Tracking for Parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 20;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 20;
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    // Window Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!prefersReducedMotion) {
        // Smooth camera lag
        targetX += (mouseX - targetX) * 0.03;
        targetY += (-mouseY - targetY) * 0.03;
        camera.position.x = targetX * 0.5;
        camera.position.y = targetY * 0.5;
        camera.lookAt(0, 0, 0);

        // Update particle positions
        const posArray = particleGeometry.attributes.position.array as Float32Array;
        for (let i = 0; i < particleCount; i++) {
          posArray[i * 3] += velocities[i].x;
          posArray[i * 3 + 1] += velocities[i].y;
          posArray[i * 3 + 2] += velocities[i].z;

          // Boundary bouncing
          if (posArray[i * 3] < -80 || posArray[i * 3] > 80) velocities[i].x *= -1;
          if (posArray[i * 3 + 1] < -60 || posArray[i * 3 + 1] > 60) velocities[i].y *= -1;
          if (posArray[i * 3 + 2] < -40 || posArray[i * 3 + 2] > 40) velocities[i].z *= -1;
        }
        particleGeometry.attributes.position.needsUpdate = true;

        // Recompute dynamic neural network connection lines between nearby particles
        let lineIndex = 0;
        const linePos = lineGeometry.attributes.position.array as Float32Array;
        const connectionDistance = isMobile ? 18 : 22;

        for (let i = 0; i < particleCount && lineIndex < maxConnections; i++) {
          for (let j = i + 1; j < particleCount && lineIndex < maxConnections; j++) {
            const dx = posArray[i * 3] - posArray[j * 3];
            const dy = posArray[i * 3 + 1] - posArray[j * 3 + 1];
            const dz = posArray[i * 3 + 2] - posArray[j * 3 + 2];
            const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

            if (dist < connectionDistance) {
              linePos[lineIndex * 6] = posArray[i * 3];
              linePos[lineIndex * 6 + 1] = posArray[i * 3 + 1];
              linePos[lineIndex * 6 + 2] = posArray[i * 3 + 2];
              linePos[lineIndex * 6 + 3] = posArray[j * 3];
              linePos[lineIndex * 6 + 4] = posArray[j * 3 + 1];
              linePos[lineIndex * 6 + 5] = posArray[j * 3 + 2];
              lineIndex++;
            }
          }
        }
        lineGeometry.setDrawRange(0, lineIndex * 2);
        lineGeometry.attributes.position.needsUpdate = true;

        particles.rotation.y += 0.0006;
        lineMesh.rotation.y += 0.0006;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      particleGeometry.dispose();
      particleMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80"
    />
  );
};

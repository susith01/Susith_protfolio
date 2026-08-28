import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 500;
    const height = mount.clientHeight || 500;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 24;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Glowing AI Core (Icosahedron Wireframe + Inner Glow Mesh)
    const coreGeometry = new THREE.IcosahedronGeometry(4.5, 2);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    rootGroup.add(coreMesh);

    // Inner pulsating energy sphere
    const innerSphereGeo = new THREE.SphereGeometry(2.6, 24, 24);
    const innerSphereMat = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.25,
      wireframe: true,
    });
    const innerSphere = new THREE.Mesh(innerSphereGeo, innerSphereMat);
    rootGroup.add(innerSphere);

    // 2. Orbital Rings (Python / AI data orbits)
    const ring1Geo = new THREE.TorusGeometry(7.2, 0.04, 16, 100);
    const ring1Mat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.6,
    });
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    ring1.rotation.x = Math.PI / 3;
    ring1.rotation.y = Math.PI / 6;
    rootGroup.add(ring1);

    const ring2Geo = new THREE.TorusGeometry(8.4, 0.04, 16, 100);
    const ring2Mat = new THREE.MeshBasicMaterial({
      color: 0xa855f7,
      transparent: true,
      opacity: 0.5,
    });
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    ring2.rotation.x = -Math.PI / 4;
    ring2.rotation.z = Math.PI / 5;
    rootGroup.add(ring2);

    const ring3Geo = new THREE.TorusGeometry(9.6, 0.03, 16, 100);
    const ring3Mat = new THREE.MeshBasicMaterial({
      color: 0x34d399,
      transparent: true,
      opacity: 0.4,
    });
    const ring3 = new THREE.Mesh(ring3Geo, ring3Mat);
    ring3.rotation.y = Math.PI / 3;
    rootGroup.add(ring3);

    // 3. Floating Technology Data Nodes (Spheres around vertices and orbits)
    const nodeCount = 36;
    const nodeGeometry = new THREE.SphereGeometry(0.18, 12, 12);
    const nodeMaterialCyan = new THREE.MeshBasicMaterial({ color: 0x06b6d4 });
    const nodeMaterialPurple = new THREE.MeshBasicMaterial({ color: 0xc084fc });
    const nodeMaterialYellow = new THREE.MeshBasicMaterial({ color: 0xfbbf24 });

    const nodesGroup = new THREE.Group();
    const nodePoints: THREE.Vector3[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const phi = Math.acos(-1 + (2 * i) / nodeCount);
      const theta = Math.sqrt(nodeCount * Math.PI) * phi;
      const radius = 5.2 + Math.sin(i * 1.5) * 1.2;

      const x = radius * Math.cos(theta) * Math.sin(phi);
      const y = radius * Math.sin(theta) * Math.sin(phi);
      const z = radius * Math.cos(phi);

      const mat = i % 3 === 0 ? nodeMaterialCyan : i % 3 === 1 ? nodeMaterialPurple : nodeMaterialYellow;
      const node = new THREE.Mesh(nodeGeometry, mat);
      node.position.set(x, y, z);
      nodesGroup.add(node);
      nodePoints.push(new THREE.Vector3(x, y, z));
    }
    rootGroup.add(nodesGroup);

    // 4. Data Streams / Neural Connection lines between orbital nodes
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.3,
      blending: THREE.AdditiveBlending,
    });

    const linesGroup = new THREE.Group();
    for (let i = 0; i < nodePoints.length; i++) {
      for (let j = i + 1; j < nodePoints.length; j++) {
        if (nodePoints[i].distanceTo(nodePoints[j]) < 3.8) {
          const geom = new THREE.BufferGeometry().setFromPoints([nodePoints[i], nodePoints[j]]);
          const line = new THREE.Line(geom, lineMat);
          linesGroup.add(line);
        }
      }
    }
    rootGroup.add(linesGroup);

    // 5. Surrounding Floating Particles
    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 20;
      particlePositions[i + 1] = (Math.random() - 0.5) * 20;
      particlePositions[i + 2] = (Math.random() - 0.5) * 20;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.14,
      color: 0x67e8f9,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    rootGroup.add(particles);

    // Mouse Parallax
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      targetRotationY = x * 0.8;
      targetRotationX = -y * 0.8;
    };

    window.addEventListener('mousemove', handlePointerMove, { passive: true });

    // Resize Observer
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width: newWidth, height: newHeight } = entry.contentRect;
        if (newWidth > 0 && newHeight > 0) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(mount);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      rootGroup.rotation.x = currentRotationX;
      rootGroup.rotation.y = currentRotationY + elapsedTime * 0.15;

      // Inner Core rotation & pulse
      coreMesh.rotation.x = elapsedTime * 0.2;
      coreMesh.rotation.y = elapsedTime * 0.3;
      const pulse = 1 + Math.sin(elapsedTime * 2.5) * 0.05;
      coreMesh.scale.set(pulse, pulse, pulse);

      innerSphere.rotation.x = -elapsedTime * 0.3;
      innerSphere.rotation.z = elapsedTime * 0.2;

      // Orbit rotations
      ring1.rotation.z += 0.008;
      ring2.rotation.y += 0.006;
      ring3.rotation.x -= 0.007;

      nodesGroup.rotation.y = -elapsedTime * 0.08;
      linesGroup.rotation.y = -elapsedTime * 0.08;

      particles.rotation.y = elapsedTime * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handlePointerMove);
      resizeObserver.disconnect();
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerSphereGeo.dispose();
      innerSphereMat.dispose();
      ring1Geo.dispose();
      ring1Mat.dispose();
      ring2Geo.dispose();
      ring2Mat.dispose();
      ring3Geo.dispose();
      ring3Mat.dispose();
      nodeGeometry.dispose();
      nodeMaterialCyan.dispose();
      nodeMaterialPurple.dispose();
      nodeMaterialYellow.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[540px] flex items-center justify-center">
      {/* Glow Orb behind canvas */}
      <div className="absolute w-72 h-72 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none -top-10 -left-10 animate-pulse" />
      <div className="absolute w-72 h-72 rounded-full bg-purple-600/20 blur-3xl pointer-events-none -bottom-10 -right-10 animate-pulse" />

      {/* 3D Canvas Mount */}
      <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* Futuristic Overlay Badges & Data Streams */}
      <div className="absolute bottom-4 left-4 sm:left-6 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-cyan-500/30 backdrop-blur-md text-xs font-mono text-cyan-300 flex items-center gap-2 shadow-lg shadow-cyan-950/40">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>Neural Matrix: Live 60 FPS</span>
      </div>

      <div className="absolute top-4 right-4 sm:right-6 px-3 py-1.5 rounded-lg bg-slate-900/80 border border-purple-500/30 backdrop-blur-md text-xs font-mono text-purple-300 flex items-center gap-2 shadow-lg shadow-purple-950/40">
        <span className="w-2 h-2 rounded-full bg-purple-400" />
        <span>Python • AI • Data Analytics</span>
      </div>
    </div>
  );
};

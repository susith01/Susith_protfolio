import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Contact3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 380;
    const height = mount.clientHeight || 380;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    mount.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // Central Sphere
    const centerGeo = new THREE.SphereGeometry(1.5, 20, 20);
    const centerMat = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      wireframe: true,
      transparent: true,
      opacity: 0.5,
    });
    const centerMesh = new THREE.Mesh(centerGeo, centerMat);
    group.add(centerMesh);

    // Orbiting Communication Nodes (Email, Phone, LinkedIn, GitHub)
    const nodeCount = 12;
    const nodes: THREE.Mesh[] = [];
    const nodeGeo = new THREE.SphereGeometry(0.25, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xa855f7 });

    for (let i = 0; i < nodeCount; i++) {
      const mesh = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 5.5 + (i % 2 === 0 ? 1 : -0.5);
      mesh.position.set(
        Math.cos(angle) * radius,
        Math.sin(angle) * radius * 0.7,
        (Math.random() - 0.5) * 3
      );
      group.add(mesh);
      nodes.push(mesh);
    }

    // Dynamic Connecting Lines
    const lineMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending,
    });

    const linesGroup = new THREE.Group();
    for (let i = 0; i < nodes.length; i++) {
      const lineGeom = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        nodes[i].position,
      ]);
      const line = new THREE.Line(lineGeom, lineMat);
      linesGroup.add(line);

      // Connect adjacent nodes
      const nextIdx = (i + 1) % nodes.length;
      const ringLineGeom = new THREE.BufferGeometry().setFromPoints([
        nodes[i].position,
        nodes[nextIdx].position,
      ]);
      const ringLine = new THREE.Line(ringLineGeom, lineMat);
      linesGroup.add(ringLine);
    }
    group.add(linesGroup);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      group.rotation.y = elapsed * 0.25 + mouseX * 0.5;
      group.rotation.x = Math.sin(elapsed * 0.2) * 0.1 - mouseY * 0.5;

      centerMesh.rotation.y = elapsed * 0.5;
      centerMesh.rotation.x = elapsed * 0.3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      if (mount && renderer.domElement) {
        mount.removeChild(renderer.domElement);
      }
      centerGeo.dispose();
      centerMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      lineMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-[320px] sm:h-[380px] flex items-center justify-center">
      <div className="absolute w-56 h-56 rounded-full bg-cyan-500/20 blur-3xl pointer-events-none" />
      <div ref={mountRef} className="w-full h-full" />
    </div>
  );
};

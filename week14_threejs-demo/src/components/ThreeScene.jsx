// ThreeScene.jsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
//imports controls from the three.js examples folder
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";


export default function ThreeScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );

    camera.position.z = 5;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    // Cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    //add a sphere
    const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.5),
        new THREE.MeshBasicMaterial({ color: 0xff66cc })
    );
    sphere.position.x = 2;
    scene.add(sphere);

    // --- Animation Loop ---
    const animate = () => {
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      controls.update(); 
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    // --- Handle Resize ---
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    window.addEventListener("click", () => {
        cube.material.color.set(Math.random() * 0xffffff);
    });

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      mount.removeChild(renderer.domElement);
      // Dispose geometries/materials for memory cleanup
      geometry.dispose();
      material.dispose();
      controls.dispose();
      renderer.dispose();
    };
  }, []);


  return <div ref={mountRef} style={{ width: '100%', height: '100vh' }} />;
}

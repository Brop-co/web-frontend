"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three-stdlib";

const ModelViewer = () => {
  const mountRef = useRef<HTMLDivElement | null>(null); // Explicitly type the ref as HTMLDivElement

  useEffect(() => {
    if (!mountRef.current) return; // Add a null check for mountRef

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background

    mountRef.current.appendChild(renderer.domElement); // Type is now HTMLDivElement

    // Add lighting to the scene
    const light = new THREE.AmbientLight(0x909090); // Soft white light
    scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    scene.add(directionalLight);

    let model: THREE.Object3D<THREE.Object3DEventMap>; // Variable to store the loaded model

    const loader = new GLTFLoader();
    loader.load(
      "/models/stylized_planet.glb",
      (gltf) => {
        model = gltf.scene; // Assign the loaded model to the variable
        scene.add(model);
        model.position.set(0, 0, 0);
        model.scale.set(3.5, 3.5, 3.5); // Adjust the scale to reduce the size of the model
      },
      undefined,
      (error) => {
        console.error("An error occurred while loading the model:", error);
      }
    );

    camera.position.z = 5;

    const updateModelRotation = (event: MouseEvent) => {
      // Calculate normalized mouse position
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1; // Normalize x
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1; // Normalize y

      // Adjust rotation based on mouse position
      if (model) {
        model.rotation.y = mouseX * Math.PI; // Rotate around the Y-axis
        model.rotation.x = mouseY * Math.PI; // Rotate around the X-axis
      }
    };

    // Add mousemove event listener
    window.addEventListener("mousemove", updateModelRotation);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the model slowly if it's loaded
      if (model) {
        model.rotation.y += 0.01; // Optional: Rotate around the Y-axis for continuous motion
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      // Cleanup
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener("mousemove", updateModelRotation); // Remove the event listener
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full flex items-center justify-center h-fit overflow-visible"
    />
  );
};

export default ModelViewer;

import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import shipScene from '../assets/3D/pirate_ship.glb';
import { useFrame } from '@react-three/fiber';
import PathAnimation from './PathAnimation.js';
import * as THREE from 'three';

// Ship model from Sketchfab: https://sketchfab.com/3d-models/tz-pirate-ship-2d606855300845f2ab4331e2853ff0e0
const pirateShip = ({ ...props }) => {
    const ref = useRef();
    const pathAnimationRef = useRef();

    // Load 3D model and its animations
    const { scene, animations } = useGLTF(shipScene);
    const { actions } = useAnimations(animations, ref);

    // Create circular path for dragon to fly on
    const radius = 32;  // Adjust the radius as needed
    const numPoints = 25;  // Number of points to define the circle
    const pathPoints = [];

    for (let i = 0; i < numPoints; i++) {
        const theta = - (i / numPoints) * Math.PI * 2;  // Angle in radians, negative for counterclockwise
        const x = radius * Math.cos(theta);
        const z = radius * Math.sin(theta);
        const y = 0.3*Math.random();  // Random value between 0 and 1
        pathPoints.push(new THREE.Vector3(x, y+2, z-1));
    }

    useEffect(() => {
        actions['Take 001'].play();

        // Create a PathAnimation instance and start it with rotated points
        pathAnimationRef.current = new PathAnimation(ref.current, pathPoints, true, 2000, 75, true, 0);
        pathAnimationRef.current.start();

        // Cleanup function to stop the animation when the component unmounts
        return () => pathAnimationRef.current.stop();
    }, [actions]);

    // Update the path animation in the animation loop
    useFrame(() => {
        if (pathAnimationRef.current) {
            pathAnimationRef.current.update();
        }
    });

    // Create the line geometry to visualize the path
    // const lineGeometry = new THREE.BufferGeometry().setFromPoints(pathPoints);
    // const lineMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
    // const line = new THREE.Line(lineGeometry, lineMaterial);

    return (
        <>
            {/*<primitive object={line} />*/}
            <mesh {...props} ref={ref} position={[7, -1, 0]} scale={[0.0075, 0.0075, 0.0075]}>
                <primitive object={scene} />
            </mesh>
        </>
    );
};

export default pirateShip;

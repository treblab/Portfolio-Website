import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import krakenScene from '../assets/3D/kraken.glb';
import { useFrame } from '@react-three/fiber';

// Kraken model from Sketchfab: https://sketchfab.com/3d-models/the-kraken-55d900af1bfa460fb0f9304ab9fc594b
const Kraken = ({ ...props }) => {
    const ref = useRef();

    // Load 3D model and its animations
    const { scene, animations } = useGLTF(krakenScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        actions['Idle'].play();
    }, [actions]);
    
    useFrame(() => {
    });

    return (
        <>
            <mesh {...props} ref={ref} position={[-6, -0.3, -25]} scale={[0.0025,0.0025,0.0025]} rotation={[0, Math.PI, 0]}>
                <primitive object={scene} />
            </mesh>
        </>
    );
};

export default Kraken;

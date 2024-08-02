import React, { useEffect, useRef } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import airshipScene from '../assets/3D/airship.glb';
import { useFrame } from '@react-three/fiber';

// Airship model from Sketchfab: https://sketchfab.com/3d-models/peachy-balloon-gift-3c8b73ebbb3748d39994fc87bc945474
const Airship = ({ ...props }) => {
    const ref = useRef();

    // Load 3D model and its animations
    const { scene, animations } = useGLTF(airshipScene);
    const { actions } = useAnimations(animations, ref);

    useEffect(() => {
        actions['Scene'].play();
    }, [actions]);
    
    useFrame(() => {
    });

    return (
        <>
            <mesh {...props} ref={ref} position={[-30, 16, 0]} scale={[0.002,0.002,0.002]} rotation={[0, -Math.PI/2, 0]}>
                <primitive object={scene} />
            </mesh>
        </>
    );
};

export default Airship;

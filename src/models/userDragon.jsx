import React, {useEffect, useRef} from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'
import airshipScene from '../assets/3D/golden_dragon.glb'

// Dragon model from Sketchfab: https://sketchfab.com/3d-models/golden-finch-dragon-7852c44b195240bb8eb2fbf697223051

const userDragon = ({ isRotating, ...props }) => {
    const ref = useRef();
    // Load 3D model and its animations
    const { scene, animations } = useGLTF(airshipScene);
    const { actions } = useAnimations(animations, ref);
    
    useEffect(() => {

        actions['Idle'].play();
        
        if (isRotating) {
            actions['RideFlyRun'].play();
        } else {
            // actions['RideFlyRun'].stop();
        }
    }, [actions, isRotating]);
    
    return (
        <mesh {...props} ref={ref} position = {[0,-3,-2]} scale = {[35,35,35]}>
            <primitive object={scene}></primitive>
        </mesh>
    )
}

export default userDragon
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useState, Suspense } from 'react'
import Loader from '../components/Loader'
import Island from "../models/island.jsx";
import Sky from "../models/sky.jsx";
import UserDragon from "../models/userDragon.jsx";
import HomeInfo from "../components/HomeInfo.jsx";

const Home = () => {
    
    const [isRotating, setIsRotating] = useState(false);
    const [currentSegment, setCurrentSegment] = useState(0, null);
    
    // Function to handle segment index changes
    const handleSegmentIndexChange = (newIndex) => {
        setCurrentSegment(newIndex);
    };
    
    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -10, -45];
        let rotation = [0.1, -6.5, 0];
        
        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];
        } else {
            screenScale = [1, 1, 1];
        }
        
        return [screenScale, screenPosition, rotation]
    }
    
    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();

    const adjustDragonForScreenSize = () => {
        let screenScale, screenPosition;

        if (window.innerWidth < 768) {
            screenScale = [0, 1.5, 0];
        } else {
            screenScale = [3, 3, 3];
            screenPosition = [0, -4, -4];
        }

        return [screenScale, screenPosition]
    }
    
    const [dragonScale, dragonPosition] = adjustDragonForScreenSize();
    
    return (
        <section className="w-full h-screen relative">
            
            <div>
                {/* Message display */}
                <div className="absolute top-40 left-0 right-0 z-10 flex items-center justify-center">
                    <HomeInfo currentStage={currentSegment}/>
                </div>
            </div>

            <Canvas
                className={'w-full h-screen bg-transparent '}
                camera={{near: 0.1, far: 1000}}
            >
                <Suspense fallback={<Loader/>}>

                    {/*Lighting*/}
                    <ambientLight intensity={0.2}/>
                    <directionalLight
                        position={[0, 1, 0]} intensity={1} lookAt={[0, 0, 0]}
                    />
                    <spotLight position={[0, 30, 30]} intensity={5000}
                               lookAt={[0, 0, 0]} angle={Math.PI / 2}
                               color={"GoldenRod"}
                    />
                    <hemisphereLight skyColor="#b1e1ff" groundColor={"000000"} intensity={1.75}/>

                    <Island
                        position={islandPosition}
                        scale={islandScale}
                        rotation={islandRotation}
                        isRotating={isRotating}
                        setIsRotating={setIsRotating}
                        onSegmentIndexChange={handleSegmentIndexChange}
                    />

                    <Sky
                        isRotating={isRotating}
                    />

                    <UserDragon
                        isRotating={isRotating}
                        position={dragonPosition}
                        scale={dragonScale}
                        rotation={[0, Math.PI / 2, -0.1]}
                        // -0.2 , Math.PI/2
                    />

                </Suspense>
            </Canvas>

        </section>
    )
}

export default Home
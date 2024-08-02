import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const HomeInfo = ({ currentStage }) => {
    if (currentStage === 0)
        return (
            <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
                Hi, I'm
                <span className='font-semibold mx-2 text-white'>Albert</span>
                👋
                <br/>
                A Software Engineering Student from Sydney.
                <br/>
                .

                <div to='/about' className='neo-brutalism-white neo-btn'>
                    Scroll 🖱
                    {/*<img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />*/}
                </div>
            </h1>

        );

    if (currentStage === 1) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    I'm a passionate engineer that loves to
                    <br/> develop software solutions, especially
                    <br/>  in game development 🎮 !
                </p>

                <div to='/about' className='neo-brutalism-white neo-btn'>
                    Scroll 🖱
                    {/*<img src={arrow} alt='arrow' className='w-4 h-4 object-contain'/>*/}
                </div>
            </div>
        );
    }

    if (currentStage === 2) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    I've worked at one of the world's
                    <br/> largest investment banks, offering a unique 
                    <br/> background and problem-solving skillset.
                    
                </p>

                <Link to='/about' className='neo-brutalism-white neo-btn'>
                    About
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 3) {
        return (
            <div className='info-box'>
                <p className='font-medium text-center sm:text-xl'>
                    I've used my skillset to create projects that 
                    <br /> are focused on engagement and interactivity.
                </p>

                <Link to='/projects' className='neo-brutalism-white neo-btn'>
                    My Projects
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    if (currentStage === 4) {
        return (
            <div className='info-box'>
                <p className='font-medium sm:text-xl text-center'>
                    Need a project done or looking for a dev? <br/> I'd love to help!
                </p>

                <Link to='/contact' className='neo-brutalism-white neo-btn'>
                     Contact 📨
                    <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
                </Link>
            </div>
        );
    }

    return null;
};

export default HomeInfo;
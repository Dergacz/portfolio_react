import React from 'react';
import {CustomButton} from "../../components/CustomButton/CustomButton";
import {Navbar} from "../../components/Navbar/Navbar";

export const Home = () => {
    return (
        <div className='home'>
            <Navbar />
            <p className='home-hello'>Welcome</p>
            <h1 className='home-title'>I'm Frontend developer</h1>
            <h2 className='home-subtitle'>based in Poland, Gdansk</h2>
            <CustomButton title='Hire me'/>
        </div>
    );
};

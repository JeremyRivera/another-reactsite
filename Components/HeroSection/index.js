import React from 'react';
import './styles.css';
import BackgroundVideo from '../../assets/videos/video-1.mp4';


function HeroSection() {
    return (
        <div className='hero-container'>

            <div className="background-video">
                <video src={BackgroundVideo} alt="bg-video" autoPlay="true" loop="true"></video>
            </div>
            <div className="hero-text">
                <h1>Jeremy Rivera</h1>
                <p>Software Developer</p>
            </div>
        </div>
    );
}
export default HeroSection;

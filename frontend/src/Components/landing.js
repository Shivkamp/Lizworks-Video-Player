import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useGlobalContext } from '../context/global';

const Landing = () => {
    const { videos } = useGlobalContext();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const totalVideos = videos.length;
        const watchedVideos = videos.filter(video => localStorage.getItem(`video-watched-${video._id}`) === 'true').length;
        const progressPercentage = (watchedVideos / totalVideos) * 100;
        setProgress(progressPercentage);
    }, [videos]);

    return (
        <LandingStyled>
            <Sidebar />
            <div className="content">
                <h1>Welcome to the Training Portal</h1>
                <p>Select an option from the sidebar to get started.</p>
                <div className="progress-container">
                    <h2>Your Progress</h2>
                    <CircularProgressbar 
                        value={progress} 
                        text={`${Math.round(progress)}%`}
                        styles={buildStyles({
                            textColor: "#000",
                            pathColor: "#4caf50",
                            trailColor: "#d6d6d6"
                        })}
                    />
                </div>
            </div>
        </LandingStyled>
    );
};

const LandingStyled = styled.div`
    display: flex;
    background-color: #ffffff;
    color: #000000;
    .content {
        padding: 20px;
        margin-left: 60px;
        h1 {
            font-size: 2rem;
            color: #000000;
        }
        p {
            font-size: 1.2rem;
            color: #000000;
        }
        .progress-container {
            margin-top: 20px;
            width: 200px;
            height: 200px;
        }
    }
`;

export default Landing;

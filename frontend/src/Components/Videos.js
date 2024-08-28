import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useGlobalContext } from '../context/global';
import Sidebar from './Sidebar';

function Videos() {
    const { videos } = useGlobalContext();

    const isVideoWatched = (index) => {
        // The first video is always unlocked
        if (index === 0) return true;

        // Check if the previous video is watched
        const previousVideoId = videos[index - 1]._id;
        return localStorage.getItem(`video-watched-${previousVideoId}`) === 'true';
    };

    return (
        <VideosStyled>
            <Sidebar />
            <div className="videos-container">
                {videos.map((video, index) => (
                    <Link
                        key={video._id}
                        to={isVideoWatched(index) ? `/videos/${video._id}` : '#'}
                        style={{
                            pointerEvents: isVideoWatched(index) ? 'auto' : 'none',
                            opacity: isVideoWatched(index) ? 1 : 0.5,
                        }}
                    >
                        <div className="video">
                            <video src={video.videoUrl} controls={false}></video>
                            <h4>{video.title}</h4>
                            <p>{video.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </VideosStyled>
    );
}

const VideosStyled = styled.div`
    display: flex;
    background-color: #ffffff;  /* Set background to white */
    color: #000000;  /* Set text color to black */
    .videos-container {
        flex-grow: 1;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        grid-gap: 1.5rem;
        padding-top: 3rem;
        transition: all 0.4s ease;
        opacity: 0;
        animation: fade-in 0.5s ease-in-out forwards;
        @keyframes fade-in {
            0% {
                opacity: 0;
                transform: scale(0);
            }
            100% {
                opacity: 1;
                transform: scale(1);
            }
        }
        .video {
            transition: all 0.4s ease;
            width: 100%;
            cursor: pointer;
            border-radius: 15px;
            background-color: #f8f8f8; /* Optional: light grey for video container */
            video {
                width: 100%;
                height: auto;
                object-fit: cover;
                border-radius: 15px;
            }
            h4 {
                color: #000000;  /* Set title color to black */
                padding: 0.5rem 0;
                font-size: 1.5rem;
                font-weight: 500;
            }
            p {
                color: #000000;  /* Set description color to black */
                opacity: 0.8;
                font-size: 1rem;
                line-height: 1.4rem;
            }
        }
    }
`;

export default Videos;

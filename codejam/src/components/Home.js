import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
          Dive into the pulse of euphoria with BeatGroove – where every beat tells a story.          </h1>
          <p className="primary-text">
          Welcome to BeatGroove, where rhythm meets euphoria!  Unleash the power of music with our vibrant platform that celebrates beats, creativity, and the joy of sound. Dive into a world of endless melodies, where every groove tells a story. Join the BeatGroove community and let the music move you! 
          </p>
      
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

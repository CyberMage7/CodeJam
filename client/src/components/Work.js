import React from "react";
import VirtualJam from "../Assets/jam.png";
import Blog from "../Assets/blog.png";
import Game from "../Assets/game.png";
import Collab from "../Assets/collab.png";


const Work = () => {
  const workInfoData = [
    {
      image: VirtualJam,
      title: "Virtuoso Jam",
      text: "Jam alongwith friends",
    },
    {
      image: Blog,
      title: "Harmonique",
      text: "Discuss your thoughts about music ",
    },
    {
      image: Game,
      title: "Rhythmix",
      text: "Compete with your friend in a fun game",
    },
    {
      image: Collab,
      title: "HarmonyHub",
      text: "Come together to create something new",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Features</p>
        <h1 className="primary-heading">What do we offer?</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
          elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;

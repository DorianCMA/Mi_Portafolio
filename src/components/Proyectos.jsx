import React from 'react';
import "../styles/Proyectos.css";
import { Tilt } from 'react-tilt';

export const Proyectos = ({ imageSrc, title, description, link }) => {
  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)"
  };

  return (
    <Tilt className=' m-20 rounded-xl' options={defaultOptions} style={{ background: 'white', height: 340, width: 250 }}>
      <div> 
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link}>Visit Project</a>
      </div>
    </Tilt>
  );
};

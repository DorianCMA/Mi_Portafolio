import React from 'react';
import Tilt from 'react-parallax-tilt';
import PropTypes from 'prop-types';
import '../styles/Habilities.css';

const ParallaxCard = ({ image }) => {
  return (
    <Tilt
    className="parallax-effect-glare-scale"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
    <div className="inner-element">
    <img src={image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
    </div>
  </Tilt>
  );
};

ParallaxCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ParallaxCard;

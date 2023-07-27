import React, { useEffect, useRef } from 'react';
import anime from 'animejs';
import miImagen from '../assets/Presentacion.png';

const Animation = () => {
    
  const elementRef = useRef(null);

  useEffect(() => {
 
    
    anime({
        targets: elementRef.current,
        translateX: 250,
        direction: 'alternate',
        loop: true,
        easing: 'cubicBezier(.5, .05, .1, .3)'
      })
  }, []);

  return (
    <img   className='w-[300px]' ref={elementRef} src={miImagen} alt="Descripción de la imagen" />
  );
};

export default Animation;
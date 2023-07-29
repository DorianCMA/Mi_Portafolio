import React, { useEffect } from 'react';
import '../styles/Header.css'
import YourSVGImage from '../assets/habilidades/CircuitPrimary1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';


export const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Aumenta la duración de la animación a 2 segundos
      easing: 'ease',
    });
    AOS.refresh();
  }, []);
  return (
    <header
      className="flex flex-col items-center  justify-center h-[500px] bg-[#1c1c1c] lg:flex-row lg:justify-between"
      style={{
        backgroundImage: `url(${YourSVGImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      <div  className="flex flex-col gap-y-[25px] items-center ml-[40px] mb-[50px]">
        <div data-aos="fade-left" data-aos-delay="100" className="mt-[100px]  flex justify-center lg:justify-center lg:mt-[-100px] items-center font-semibold text-[20px] font-[18px] bg-black h-[60px] w-[120px] rounded-md">
          <h2 className="text-white m-2" >hola! soy</h2>
          <span className="lg:w-[30px] h-[30px] transform rotate-45 absolute mt-[60px]  bg-black"></span>
        </div>
        <h1 data-aos="fade-right" data-aos-delay="200" className="text-3xl sm:text-5xl md:text-6xl lg:font-semibold text-white"> Dorian Matos</h1>
        <p data-aos="fade-left" data-aos-delay="300" className="text-gray-500">Desarrollador</p>

        <section data-aos="fade-left" data-aos-delay="400" className="button text-white border-2 border-[#ccc] py-[20px] px-[40px] rounded-md" to="">
          Mi trabajo <FontAwesomeIcon className="arrow ml-4 text-white " icon={faArrowRight} />{' '}
        </section>
      </div>
     
    </header>
  );
};

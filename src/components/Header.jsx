import React from 'react';
import YourSVGImage from '../assets/habilidades/CircuitPrimary1.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Animation from './Animation';

export const Header = () => {
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
      <div className="flex flex-col gap-y-[25px] items-center ml-[40px] mb-[50px]">
        <div className="mt-[100px]  flex justify-center lg:justify-center lg:mt-[-100px] items-center font-semibold text-[20px] font-[18px] bg-[#ff7b00] h-[60px] w-[120px] rounded-md">
          <h2 className="text-white m-2">hola! soy</h2>
          <span className="lg:w-[30px] h-[30px] transform rotate-45 absolute mt-[60px]  bg-[#ff7b00]"></span>
        </div>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:font-semibold text-white"> Dorian Matos</h1>
        <p className="text-gray-500">Programador Web</p>

        <section className="button text-white border-2 border-[#ff7b00] py-[20px] px-[40px] rounded-md" to="">
          Mi trabajo <FontAwesomeIcon className="arrow ml-4 text-white " icon={faArrowRight} />{' '}
        </section>
      </div>
      <div className="mb-[100px]  mr-[200px] lg:mr-[250px]">
        <Animation></Animation>
      </div>
    </header>
  );
};

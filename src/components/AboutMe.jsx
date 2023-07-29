import React, { useEffect } from 'react';
import '../styles/about.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedScene from './Saturno';
import img from '../assets/pc.png';

export const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
    });
  }, []);

  return (
    <section className="circle lg:grid lg:justify-center lg:items-center lg:grid-cols-[40%,60%] bg-[#1c1c1c] lg:p-10 md:p-8 sm:p-4">
      <div data-aos="fade-right" className="fondo">
        <div data-aos="fade-left" className="mb-4 sm:mb-8">
          <p className="font-sans text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white">
            Mi perfil profesional se enfoca en la creatividad y la pasión por la programación. Me gusta desafiarme a mí mismo y aprender cosas nuevas en cada proyecto en el que trabajo. Me considero un solucionador de problemas y siempre busco encontrar la mejor manera de abordar los desafíos técnicos. También soy un gran defensor de la colaboración y la comunicación abierta con los miembros del equipo en los que trabajo. Creo que la sinergia entre los miembros del equipo es clave para lograr el éxito en cualquier proyecto.
          </p>
        </div>
      </div>

      <div className=" ">
        <AnimatedScene />
      </div>
    </section>
  );
};

import React from 'react'
import '../styles/about.css'
import  { useEffect } from 'react';
import img from '../assets/pc.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedScene from "./Saturno";




export const AboutMe = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease',
    });
  }, []);

  
  return (
<section className=" circle  lg:grid justify-center items-center lg:grid-cols-[40%,60%] bg-[#1c1c1c] lg:p-40">
 
  <div data-aos="fade-right" className='fondo'>

  <div data-aos="fade-left" className="mb-10">
    <p className=' font-sans text-base lg:text-lg leading-relaxed text-white'>
      Mi perfil profesional se enfoca en la creatividad y la pasión por la programación. Me gusta desafiarme a mí mismo y aprender cosas nuevas en cada proyecto en el que trabajo. Me considero un solucionador de problemas y siempre busco encontrar la mejor manera de abordar los desafíos técnicos. También soy un gran defensor de la colaboración y la comunicación abierta con los miembros del equipo en los que trabajo. Creo que la sinergia entre los miembros del equipo es clave para lograr el éxito en cualquier proyecto.
    </p>
  </div>
  </div>

  <div className=' flex mt-20 justify-center' >
  < AnimatedScene />
  </div>
</section>

  )
}

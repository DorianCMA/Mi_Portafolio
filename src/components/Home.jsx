import React from "react";
import { Nav } from "./Nav";
import { Header } from "./Header";
import { AboutMe } from "./AboutMe";
import ParallaxCard from "./Habilities";
import { Proyectos } from "./Proyectos";
import ContacForm from "./ContacForm";
import fondo from '../assets/habilidades/fondo3.jpg';
import '../styles/Home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

import htmlImage from "../assets/habilidades/html.png";
import cssImage from "../assets/habilidades/css.png";
import jsImage from "../assets/habilidades/javascript.png";
import reactImage from "../assets/habilidades/react.png";
import tailwindImage from "../assets/habilidades/tailwind.png";
import nodeImage from "../assets/habilidades/node.png";
import mongodb from "../assets/habilidades/mongodb.png";
import firebaseImage from "../assets/habilidades/firebase.png";
import javaImage from "../assets/habilidades/java.png";
import flutterImage from "../assets/habilidades/flutter.png";
import androidImage from "../assets/habilidades/android.png";

function Home() {
  AOS.init(); // Inicializa AOS para que las animaciones funcionen

  return (
    <>
      <Nav />
      <Header />
      <div
        className="scroll flex flex-col items-center justify-center h-[200px] bg-[#1c1c1c] lg:flex-row lg:justify-between"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}
      >
        
      </div>
      <AboutMe />
      <div className="bg-[#1c1c1c] lg:grid grid-cols-1 gap-4 w-full justify-items-center align-items-center p-4">
        <div className="grid grid-cols-4 gap-20" data-aos="fade-left" data-aos-delay="200">
          <ParallaxCard image={htmlImage} className="border" />
          <ParallaxCard image={cssImage} className="border" />
          <ParallaxCard image={jsImage} className="border" />
          <ParallaxCard image={reactImage} className="border" />
        </div>
        <div className="grid grid-cols-4 gap-10" data-aos="fade-left" data-aos-delay="300">
          <ParallaxCard image={tailwindImage} className="border" />
          <ParallaxCard image={nodeImage} className="border" />
          <ParallaxCard image={mongodb} className="border" />
          <ParallaxCard image={firebaseImage} className="border" />
        </div>
        <div className="grid grid-cols-3 gap-8" data-aos="fade-left" data-aos-delay="400">
          <ParallaxCard image={javaImage} className="border" />
          <ParallaxCard image={flutterImage} className="border" />
          <ParallaxCard image={androidImage} className="border" />
        </div>
      </div>
      <div className="hidden lg:grid grid-cols-3 gap-4 w-full justify-items-center p-4">
        <Proyectos />
        <Proyectos />
        <Proyectos />
      </div>
      <div className="lg:hidden grid-cols-1 gap-4 w-full justify-items-center p-4">
        <Proyectos />
        <Proyectos />
        <Proyectos />
      </div>
      <ContacForm />
    </>
  );
}

export { Home };

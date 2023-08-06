import "../styles/Nav.css"
import React, { useState } from 'react'

export const Nav = () => {
    const [isOpen,setIsopen] = useState(false)
    const [equis,setEquis] = useState(false)

    function handleClick(){

        setIsopen(!isOpen)
        setEquis(!equis)
        
    }
    

  return (
    <nav  className="nav w-full">
    <div className="nav_logo">Logo</div>
    
    <div className={`nav_items ${isOpen ? "open " : " "}`}>
   
        <a href="/.">
            Inicio
        </a>
        <a href="#nosotros">
            Sobre nosotros
        </a>
        <a href="#proceso">
            Proceso
        </a>
        <a href="#crear">
            Crear caja
        </a>
    </div>
    <div className={`nav_toggle ${equis ? "close" : ""}`} onClick={handleClick} >
        <span></span>
        <span></span>
        <span></span>
    </div>
</nav>
  )
}

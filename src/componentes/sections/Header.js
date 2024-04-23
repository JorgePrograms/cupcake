
import React from 'react'
import { NavLink } from 'react-router-dom'
import navbarMenu from '../../assests/images/navbar.svg'
import menuLogo from '../../assests/images/DragonBall.svg'
function Header() {


  return (

    <header className='header'>
      
        <div className='main-menu__logo'>
              <a href='/logo' className='main-menu__branding'><img className='navbar' src={menuLogo} alt=''/></a>
              <a href='/nav' className='main-menu__branding'><img className='navbar' src={navbarMenu} alt='dev'/>
                </a> 
       </div>
     <nav className="main-menu">
         <ul className='main-menu__list'>
             <li className='main-menu__item'><NavLink to="/" className='link' exact="true">Inicio</NavLink></li>
             <li className='main-menu__item'><NavLink to="/cupcakes" className='link' exact="true">Cupcakes</NavLink></li>
             <li className='main-menu__item'><NavLink to="/nosotros" className='link'exact="true"> Nosotros</NavLink></li>
        
          </ul>
        </nav>
    </header>

  )
}

export default Header
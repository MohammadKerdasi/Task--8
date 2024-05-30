import './NavBar.css'
import logo from '../../img-assets/logo.svg'
import menu_icon from './..//..//img-assets/menu-icon.png'
import { useState } from 'react'




const NavBar = () => {


  const [SideBar , setSideBar] = useState(false)
  const ToogleMenu = () => {
    SideBar ? setSideBar(false) : setSideBar(true)
 
      
  }
 

  return (
    <nav className='container'>
        <div className="logo">
            <img src={logo} alt="" /> 
            <span>Digital marketing agency</span>
        </div>
        <div className="links">
            <ul className={SideBar ? '' : 'side-bar' }> 
                <li className='list-item'><a href="#Home" id='home'></a>Home</li>
                <li className='list-item' ><a href="#Services" id='Services'></a>Services</li>
                <li className='list-item'><a href="#Portfolio" id='Portfolio'></a>Portfolio</li>
                <li className='list-item'><a href="#Clients & Partners" id='Clients & Partners'></a>Clients & Partners</li>
                <li className='list-item'><a href="#Academy" id='Academy'></a>X Academy</li>
                <li className='list-item'><a href="#About Us" id='About Us'></a>About Us</li>
                <li className='list-item'><a href="#Talk" id='talk'></a> Let's Talk</li>
                
            </ul>
            <img src={menu_icon} alt="" className='Menu-icon' onClick={ToogleMenu} />
        </div>
    </nav>
  )
}

export default NavBar
import React from 'react' 
import { Link } from 'react-router-dom' 
import './Header.css' 
 
 
const Header = () => { 

    return ( 
        <div className="header"> 
        
            <div className="background-logo"> 
                <a href='/' className='logo'></a> 
            </div> 
            <div className='container'> 
                <a className="logo_company"> 
                   
               
                </a> 
                <div className="nav"> 
                    <Link to='/' className='Link'>Home</Link> 
                    <Link to='/about' className='Link'>Card</Link> 
                    <Link to='/service' className='Link'>Busket</Link> 
                   
                    
                </div> 
            </div> 
        </div> 
    ) 
} 
export default Header;
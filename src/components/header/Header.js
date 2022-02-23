import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../media/logo.png';
import './header.css';


const Header = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () =>{
        if(window.scrollY >= 80){
            console.log('Navbar Scrolling');
            setColorchange(true);
            // document.getElementById('navbar').style.backgroundColor = '#fff';
        }
        else{
            setColorchange(false);
            console.log('navbar not scrolling');
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <nav id='navbar' class={colorChange ? 'navbar navbar-expand-lg navbar-light fixed-top nav-active' : 'navbar navbar-expand-lg navbar-light fixed-top'}>
            <div class="container">
                <Link class="navbar-brand" to="/">
                    <img src={logo} alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav m-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink exact to={'/'} activeClassName={'active-nav'} className="nav-link px-4">Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to={'/about'} activeClassName={'active-nav'} className="nav-link px-4">About Us</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to={'/services'} activeClassName={'active-nav'} className="nav-link px-4">Services</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact to={'/contact'} activeClassName={'active-nav'} className="nav-link px-4">Contact us</NavLink>
                    </li>
                </ul>
                </div>

                <div>
                    <Link to={'/'} className='medilife-appoint-btn'>FOR <b>EMERGENCY</b> CLICK HERE</Link>
                </div>

            </div>
        </nav>
    )
}

export default Header;
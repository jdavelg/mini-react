import React, { Component } from 'react'

import { NavLink } from 'react-router-dom'

import logo from '../components/assets/images/logo.svg'
class Header extends Component {

    render() {
        return (
            <header id="header">

                <div className="center">
                   {/*  <!-- Logo --> */}
                <div id="logo">
                        <img src={logo} className="app-logo" alt="logotipo"/>
                            <span id="brand">
                                <strong>FrameB</strong>log
                    </span>
                </div>
                        {/* <!-- Menu nav --> */}
                <nav id="menu">
                            <ul>

                                <li>
                                    <NavLink to="/" activeClassName="active" >Inicio</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/formulario" activeClassName="active">Formulario</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/ruta-prueba" activeClassName="active">Pagina 1</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/peliculas" activeClassName="active">peliculas</NavLink>
                                </li>
                            </ul>

                        </nav>
                      {/*   <!-- Limpiar flotado --> */}
                <div className="clearfix"></div>
                    </div>
    
        </header>
        )
    }
}

export default Header;
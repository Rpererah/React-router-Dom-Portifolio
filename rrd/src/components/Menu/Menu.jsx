import React from 'react'
import {useLocation } from 'react-router-dom'
import estilo from './Menu.module.css'
import MenuLink from '../MenuLink/MenuLink.js';
export default function Menu() {
    const localizacao=useLocation().pathname;
    console.log(localizacao);
    return (
            <div className={estilo.navegacao}>
                <MenuLink to={'/'}>
                    Inicio
                </MenuLink>
                <MenuLink to={'/sobre'}>
                Sobre Mim
                </MenuLink>
            </div>

    )
}

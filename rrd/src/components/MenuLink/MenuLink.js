import React from 'react'
import  estilo  from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom';

export default function MenuLink({children,to}) {
    const localizacao = useLocation();
    return (
        <>
            <Link 
            className={
                `
                ${estilo.link}
                ${localizacao.pathname === to ? estilo.linkDestacado : ""}
                `
            }
            to={to} >
                {children} 
            </Link>
        </>

    )
}

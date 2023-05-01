import React from 'react'
import estilo from './Rodape.module.css';
import {ReactComponent as MinhaMarca} from './../../assets/marca_registrada.svg'
export default function Rodape() {
    return (
        <footer className={estilo.rodape}>
           <MinhaMarca/> 2023 Todos os direitos reservados a rpererah
        </footer>
    )
}

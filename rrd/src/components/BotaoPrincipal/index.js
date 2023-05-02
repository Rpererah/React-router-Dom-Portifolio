import React from 'react'
import estilo from './BotaoPrincipal.module.css';
export default function BotaoPrincipal({children,tamanho}) {
  return (
    <button 
    className={`
    ${estilo.botaoPrincipal}
    ${estilo[tamanho]}
    `}>
        {children}
    </button>
  )
}

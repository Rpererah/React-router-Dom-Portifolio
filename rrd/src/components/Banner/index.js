import React from 'react'
import estilo from './Banner.module.css'
import circuloColorido from './../../assets/circulo_colorido.png'
import minhaFoto from './../../assets/sobre_mim_foto.png'

export default function Banner() {
  return (
    <div className={estilo.banner}>
        <div className={estilo.apresentacao}>

            <h1 className={estilo.titulo}>Ola Mundo!!!</h1>
            <p className={estilo.paragrafo}>
            Ola, bem vindo eu sou Rpererah um programador gosto de  front-end, mas também me aventuro no back-end. E olha só, eu até me saio bem na parte de dados! Veja meu espaço,minha maior vontade e dividir experiencias e conhecimentos!!!.
            </p>
        </div>
        <div className={estilo.imagens}>
            <img
            className={estilo.circuloColorido}
            src={circuloColorido}
            aria-hidden={true}
            alt='Circulo colorido'
            />
            <img
            className={estilo.minhaFoto}
            src={minhaFoto}
            alt='Foto do Rpererah'
            />
            

        </div>
        
    </div>
  )
}

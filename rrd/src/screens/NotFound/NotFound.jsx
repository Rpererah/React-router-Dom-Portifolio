import React from 'react'
import estilo from './NotFound.module.css'
import erro404 from 'assets/erro_404.png';
import BotaoPrincipal from 'components/BotaoPrincipal';
import { useNavigate } from 'react-router-dom';
export default function NotFound() {
  //hook de navegacao do react router dom
  const navegar=useNavigate();
  return (
    <>
    <div className={estilo.conteudoContainer}>
      <span className={estilo.texto404}>
        404
      </span>
      <h1 className={estilo.titulo}>Ops! Pagina não encontrada</h1>
      <p className={estilo.paragrafo}>Tem certeza de que era isso que você estava procurando?
      </p>
      <p className={estilo.paragrafo}>
        Aguarde uns instantes e recarregue a página ou volte para a página inicial.
      </p>
      <div 
      className={estilo.botaoContainer}
      //faz a navegacao passando valor por string sendo -1 para voltar
      onClick={()=>navegar("/")}
      >
        <BotaoPrincipal tamanho="lg">Voltar</BotaoPrincipal>
      </div>
      <img className={estilo.imagemCachorro} src={erro404} alt="cachorro vestido como humano e usando oculos" />
    </div>
    <div className={estilo.espacoEmBranco}>

    </div>
    </>
  )
}

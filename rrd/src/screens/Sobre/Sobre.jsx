import PostModelo from 'components/PostModelo'
import React from 'react'
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.png";
import estilo from './Sobre.module.css'
export default function Sobre() {
  return (
    <main>
     <PostModelo
     fotoCapa={fotoCapa}
     titulo="Sobre mim"
     >
      <h3 className={estilo.subtitulo}>
        Ola, sou Rafael Pereira de Oliveira Araújo
      </h3>
      <img
      src={fotoSobreMim}
      alt='foto do rpererah'
      className={estilo.fotoSobreMim}
      />
<p className={estilo.paragrafo}>Eu comecei a fazer cursos de web design aos 11 anos de idade e, mais tarde, fiz 
      um curso de mecânica no SENAI. No entanto, acabei não me interessando muito pela área e, após várias tentativas frustradas de cursar engenharia mecânica, de produção e quase até engenharia civil (porque não fechou sala), decidi fazer um curso técnico de informática. Ao mesmo tempo, comecei um curso EAD na Uninter de Análise e Desenvolvimento de Sistemas, mas antes tentei também na Uninove e na Unip.</p>
      
<p className={estilo.paragrafo}>Foi na FIEC que fiz o meu curso técnico e foi a melhor experiência de todas! Hoje em dia, dou aula para o Novotec nos cursos de técnico de informática para internet e desenvolvimento de sistemas. Estou muito feliz e satisfeito com a minha trajetória profissional até agora!</p>

<p className={estilo.paragrafo}>
Após concluir minha graduação, decidi seguir para as pós-graduações em dispositivos móveis e em metodologias ativas em grupos e individuais. Percebi o quanto essas áreas estavam alinhadas com meus gostos e interesses, e por isso, não consegui parar. Atualmente, estou fazendo uma pós-graduação em neuropedagogia, o que me permite unir minha paixão pela tecnologia com a área da educação.
</p>
     </PostModelo>
    </main>
    
  )
}

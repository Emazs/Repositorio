import React from 'react'
import { TecnologiLogo } from './TecnologiLogo'
import { LinkLogo } from './LinkLogo'
import style from '../style/proyect.module.css'

export const Proyect = ({ restCountry }) => {
  const title = restCountry && restCountry.title
  const description = restCountry && restCountry.description 
  const nameTecnologi = restCountry && restCountry.nameTecnologi 
  const infoLink = restCountry && restCountry.infoLink 
  const imgProyect = restCountry && restCountry.imgProyect 

  return (
    <section className={style.proyect}>

      <div className={style.contImgageProyect}>
        <img className={style.imageProyect} src={imgProyect} alt='imgamen con referencia al proyecto' />
      </div>

      <section className={style.detailsProyect}>

        <p className={style.titleProyect}>{title}</p>

        <section className={style.tecnologies}>
          {
            restCountry && nameTecnologi.map((elem) => {
              return (
                <TecnologiLogo key={elem.name} name={elem.name} logo={elem.logo} color={elem.color} />
              )
            })
          }
        </section>

        <p>{description}</p>

        <section className={style.linksProyect}>
          {
            restCountry && infoLink.map(elem => {
              return (
                <LinkLogo key={elem.name} name={elem.name} logo={elem.logo} url={elem.url} />
              )
            })
          }
        </section>

      </section>
    </section>
  )
}

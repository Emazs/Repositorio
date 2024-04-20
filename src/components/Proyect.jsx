import React from 'react'
import { TecnologiLogo } from './TecnologiLogo'
import { LinkLogo } from './LinkLogo'
import style from '../style/proyect.module.css'

export const Proyect = ({ project }) => {
  const title = project && project.title
  const description = project && project.description
  const nameTecnologi = project && project.nameTecnologi
  const infoLink = project && project.infoLink
  const imgProyect = project && project.imgProyect

  return (
    <section className={style.proyect}>

      <div className={style.contImgageProyect}>
        <img className={style.imageProyect} src={imgProyect} alt='imgamen con referencia al proyecto' />
      </div>

      <section className={style.detailsProyect}>

        <p className={style.titleProyect}>{title}</p>

        <section className={style.tecnologies}>
          {
            project && nameTecnologi.map((elem) => {
              return (
                <TecnologiLogo key={elem.name} name={elem.name} logo={elem.logo} color={elem.color} />
              )
            })
          }
        </section>

        <p>{description}</p>

        <section className={style.linksProyect}>
          {
            project && infoLink.map(elem => {
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

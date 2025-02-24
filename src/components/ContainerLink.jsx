import React from 'react'
import style from '../style/containerLinks.module.css'

export const ContainerLink = ({ name, url }) => {
  return (
    <a href={url} title={name}>
      <section className={style.containerLinks}>
        <img src={`../src/assets/images/${name}.svg`} alt={`logo ${name}`} />
      </section>
    </a>
  )
}

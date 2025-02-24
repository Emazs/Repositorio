import React from 'react'
import { ContainerLink } from './ContainerLink.jsx'
import style from '../style/hero.module.css'

export const Hero = ({ contacts }) => {
  return (
    <section className={style.containerHero}>
      <section className={style.hero}>
        <section className={style.avatar}>
          <img src='https://avatars.githubusercontent.com/u/121462341?v=4' alt='imagen del dueño del portafolio' className={style.imageAvatar} />
          <a href='https://www.linkedin.com/in/elias-m-s/'>
            <section className={style.button}>
              <span className={style.spin}>
                <span className={style.spinGreen} />
                <p>Abierto a nuevas oportunidades</p>
              </span>
            </section>
          </a>
        </section>
        <h1>Hey, soy Elias</h1>
        <p>Apasionado desarrollador frontend de Colombia, enfocado en comprender los fundamentos del desarrollo web, y aplicarlos en la creación de aplicaciones únicas y funcionales.</p>
        <section className={style.links}>
          {
            contacts && contacts.map(item => {
              return (
                <ContainerLink key={item.name} name={item.name} url={item.url} />
              )
            })
          }
        </section>
      </section>
    </section>
  )
}

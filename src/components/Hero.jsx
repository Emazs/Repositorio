import React from 'react'
import { ContainerLink } from './ContainerLink.jsx'
import style from '../style/hero.module.css'

export const Hero = () => {
  return (
    <section className={style.containerHero}>
      <section className={style.hero}>
        <section className={style.avatar}>
          <img src='https://avatars.githubusercontent.com/u/121462341?v=4' alt='imagen del dueño del portafolio' className={style.imageAvatar} />
          <a href='https://www.linkedin.com/in/elias-m-s/'>
            <section className={style.button}>
              <span className={style.spin}>
                <span className={style.spinGreen} />
                <p>Disponible para trabajar</p>
              </span>
            </section>
          </a>
        </section>
        <h1>Hey, soy Elias</h1>
        <p>Apasionado desarrollador frontend de Colombia, enfocado en comprender los fundamentos del desarrollo web, y aplicarlos en la creación de aplicaciones únicas y funcionales.</p>
        <section className={style.links}>
          <ContainerLink name='linkedin' url='https://www.linkedin.com/in/elias-m-s/' />
          <ContainerLink name='github' url='https://github.com/Emazs' />
          <ContainerLink name='code' url='https://www.codewars.com/users/Emazs' />
          <ContainerLink name='mentor' url='https://www.frontendmentor.io/' />
        </section>
      </section>
    </section>
  )
}

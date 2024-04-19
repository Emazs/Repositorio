import React from 'react'
import style from '../style/titles.module.css'

export const Titles = ({logo, title}) => {
  return (
    <section className={style.titleEducation}>
      <img src={`../src/assets/images/${logo}.svg`} alt='logo representativo de una escuela' />
      <h3>{title}</h3>
    </section>
  )
}

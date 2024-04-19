import React from 'react'
import style from '../style/curses.module.css'

export const Curses = ({ title, name, date }) => {
  return (
    <section className={style.curses}>
      <section className={style.curse}>
        <p className={style.titleCurse}>{title}</p>
        <p className={style.nameCurse}>{name}</p>
      </section>
      <p className={style.dateCurse}>{date}</p>
    </section>
  )
}

import React from 'react'
import style from '../style/tecnologiLogo.module.css'

export const TecnologiLogo = ({ name, logo, color }) => {
  return (
    <span className={`${style.tecnologi} ${color === 'cian' ? style.cian : color === 'red' ? style.cian : style.yellow}`}>
      <div className={style.tecnologiesLogo}>
        <img src={`../src/assets/images/${logo}.svg`} alt='logo de la tecnologia' />
      </div>
      <span>{name}</span>
    </span>
  )
}

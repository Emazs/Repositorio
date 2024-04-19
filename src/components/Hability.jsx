import React from 'react'
import style from '../style/hability.module.css'

export const Hability = ({name, logo}) => {
  return (
    <section className={style.hability}>
      <span className={style.habilityConten}>
        <div className={style.habilityImg}>
          <img src={`../src/assets/images/iconWhite/${logo}.svg `}alt='logo de la tecnologia' />
        </div>
        <span>{name}</span>
      </span>
    </section>
  )
}

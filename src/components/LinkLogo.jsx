import React from 'react'
import style from '../style/linkLogo.module.css'

export const LinkLogo = ({ url, name, logo }) => {
  return (
    <a href={url} className={style.link} target='_blank'>
      <div className={style.linkLogo}>
        <img src={`../src/assets/images/iconWhite/${logo}.svg`} alt={`logo ${logo}`} />
      </div>
      <p>{name}</p>
    </a>
  )
}

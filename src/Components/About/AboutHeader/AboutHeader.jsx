import React from 'react'
import './AboutHeader.scss'
import teamPhoto from '../../../Image/about-header.png'

function AboutHeader() {
  return (
    <div className="about-header">
      <div className="about-header__container">
        <div className="about-header__content">
          <h2 className="about-header__title">Bizim hekayəmiz və missiyamız</h2>
          <p className="about-header__text">
            SalonBazar.az 2026-cı ildə Azərbaycanda gözəllik sanayesini
            rəqəmsallaşdırmaq məqsədi ilə yaradılmışdır. Biz müştərilər və salonlar
            arasında körpü rolunu oynayaraq, hər iki tərəfə maksimum rahatlıq və
            səmərəlilik təqdim edirik.
          </p>
          <p className="about-header__text">
            Platformamız vasitəsilə müştərilər ən yaxşı salonları və ustaları
            asanlıqla tapa bilər, rəyləri oxuya bilər və bir neçə toxunuşla bron edə
            bilər. Salonlar və ustalar isə daha geniş auditoriyaya çatar və öz işlərini
            daha səmərəli idarə edə bilərlər.
          </p>
        </div>
        <div className="about-header__image-wrapper">
          <img src={teamPhoto} alt="Komanda" className="about-header__image" />
        </div>
      </div>
    </div>
  )
}

export default AboutHeader

import React from "react";
import "./AboutHeader.scss";
import teamPhoto from "../../../Image/about-header.png";

function AboutHeader() {
  return (
    <div className="about-header">
      <div className="about-header__container">
        <div className="about-header__content">
          <h2 className="about-header__title">Bizim hekayəmiz və missiyamız</h2>
          <p className="about-header__text">
            SalonBazarı.az 2026-cü ildə Azərbaycanda gözəllik sənayesini
            rəqəmsallaşdırmaq məqsədi ilə yaradılmışdır. Biz müştərilər və
            salonlar arasında körpü rolunu oynayaraq, hər iki tərəfə maksimum
            rahatlıq və səmərəlilik təqdim edirik.
          </p>
          <p className="about-header__text">
            SalonBazarı.az gözəllik sahəsində şəffaflığı, əlçatanlığı və
            innovativ yanaşmanı ön plana çıxararaq, həm istifadəçilər, həm də
            salon sahibləri üçün daha müasir və rahat ekosistem formalaşdırmağı
            hədəfləyir. Bizim məqsədimiz gözəllik xidmətlərinə çıxışı
            sadələşdirmək, salonların inkişafına dəstək olmaq və bu sahədə yeni
            rəqəmsal standartlar yaratmaqdır.
          </p>
        </div>
        <div className="about-header__image-wrapper">
          <img src={teamPhoto} alt="Komanda" className="about-header__image" />
        </div>
      </div>
    </div>
  );
}

export default AboutHeader;

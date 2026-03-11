import React, { useState } from "react";
import "./FiveBox.scss";
import { FiScissors, FiCpu, FiBriefcase } from "react-icons/fi";
import { LuSofa } from "react-icons/lu";
import { PiFlask } from "react-icons/pi";
import { TbPerfume } from "react-icons/tb";

const CATEGORIES = [
  {
    id: 1,
    icon: <FiScissors />,
    title: "Peşəkar alətlər",
    desc: "Qayçılar, fenlər, t...",
    href: "/pesəkar-aletler",
  },
  {
    id: 2,
    icon: <LuSofa />,
    title: "Salon avadanlığı",
    desc: "Kreslolar, yuma y...",
    href: "/salon-avadanligi",
  },
  {
    id: 3,
    icon: <TbPerfume />,
    title: "İstifadə olunan məhsullar",
    desc: "Boyalar, şampu...",
    href: "/mehsullar",
  },
  {
    id: 4,
    icon: <FiCpu />,
    title: "Kosmetoloji cihazlar",
    desc: "Lazer, lifting və b...",
    href: "/kosmetoloji",
  },
  {
    id: 5,
    icon: <FiBriefcase />,
    title: "Vakansiyalar",
    desc: "Usta və köməkçi...",
    href: "/vakansiyalar",
  },
];

function SectionHeader({ title, subtitle, href }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="section-header">
      <div className="section-header__left">
        <h2 className="section-header__title">{title}</h2>
        <p className="section-header__subtitle">{subtitle}</p>
      </div>
      <a
        href={href}
        className={`section-header__btn ${hovered ? "section-header__btn--hovered" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        Hamısına bax
        <span className="section-header__btn-icon">{hovered ? "↘" : "↗"}</span>
      </a>
    </div>
  );
}

function FiveBox() {
  return (
    <section className="five-box">
      <div className="five-box__container">
        {/* Header */}
        <SectionHeader
          title="Gözəllik bazarı"
          subtitle="Peşəkar alətlər, avadanlıqlar və kosmetik vasaitlər"
          href="/bazar"
        />

        {/* Cards */}
        <div className="five-box__grid">
          {CATEGORIES.map((cat) => (
            <a href={cat.href} key={cat.id} className="five-box__card">
              <div className="five-box__card-icon">{cat.icon}</div>
              <h3 className="five-box__card-title">{cat.title}</h3>
              <p className="five-box__card-desc">{cat.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FiveBox;

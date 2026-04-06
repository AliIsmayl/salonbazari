import React, { useState } from 'react'
import './Packet.scss'
import { FiCheck } from 'react-icons/fi'
import { LuStore } from 'react-icons/lu'

const PACKETS = [
  {
    id: 1,
    popular: false,
    icon: <LuStore />,
    title: 'Salonlar üçün',
    subtitle: 'İdarəetmə, işçi tapılması və müştəri axını üçün ideal hell',
    features: [
      'Salon profilinin idarəsi',
      'Usta elanları yerləşdirmək',
      'CRM sistemi',
    ],
    btnLabel: 'Paketə bax',
    btnVariant: 'outline',
    href: '/packet/salon',
  },
  {
    id: 2,
    popular: true,
    icon: <LuStore />,
    title: 'Mağazalar üçün',
    subtitle: 'Onlayn sifariş qəbulu',
    features: [
      'Limitsiz məhsul yerləşdirmək',
      'Onlayn sifariş qəbulu',
      'Statistika və hesabatlar',
    ],
    btnLabel: 'Mağaza aç',
    btnVariant: 'filled',
    href: '/packet/magaza',
  },
  {
    id: 3,
    popular: false,
    icon: <LuStore />,
    title: 'Ustalar üçün',
    subtitle: 'Fərdi portfolio yaradın və yeni müştərilər qazanın.',
    features: [
      'Şəxsi portfolio səhifəsi',
      'Onlayn növbə yazıla bilmə',
      'Reyting və rəylər sistemi',
    ],
    btnLabel: 'Qeydiyyat',
    btnVariant: 'outline',
    href: '/packet/usta',
  },
]

function PacketCard({ popular, icon, title, subtitle, features, btnLabel, btnVariant, href }) {
  return (
    <div className={`packet-card ${popular ? 'packet-card--popular' : ''}`}>
      {popular && (
        <div className="packet-card__popular-badge">Populyar</div>
      )}

      <div className="packet-card__icon">{icon}</div>
      <h3 className="packet-card__title">{title}</h3>
      <p className="packet-card__subtitle">{subtitle}</p>

      <ul className="packet-card__features">
        {features.map((f, i) => (
          <li key={i} className="packet-card__feature">
            <FiCheck className="packet-card__feature-icon" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <a href={href} className={`packet-card__btn packet-card__btn--${btnVariant}`}>
        {btnLabel}
      </a>
    </div>
  )
}

function Packet() {
  const [hovered, setHovered] = useState(false)

  return (
    <section className="packet">
      <div className="packet__container">

        {/* Header */}
        <div className="packet__header">
          <div className="packet__header-left">
            <h2 className="packet__title">Bizim paketlər</h2>
            <p className="packet__subtitle">
              Biznesinizi böyütmək üçün sizə uyğun paketi seçin.
            </p>
          </div>
          {/* <a
            href="/paketler"
            className={`packet__view-btn ${hovered ? 'packet__view-btn--hovered' : ''}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Hamısına bax
            <span className="packet__view-btn-icon">{hovered ? '↗' : '↘'}</span>
          </a> */}
        </div>

        {/* Grid */}
        <div className="packet__grid">
          {PACKETS.map((item) => (
            <PacketCard key={item.id} {...item} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Packet
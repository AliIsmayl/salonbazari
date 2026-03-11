import React, { useState } from 'react'
import './ShopMain.scss'
import { FiShield, FiTag } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { TbBuildingStore } from 'react-icons/tb'
import { MdVerified } from 'react-icons/md'
import { FiMapPin } from 'react-icons/fi'
import image1 from '../../../Image/shop1.png'
import image2 from '../../../Image/shop2.png'

const FILTER_TABS = [
  { id: 'all', label: 'Bütün mağazalar' },
  { id: 'distributor', label: 'Rəsmi Distribütorlar' },
  { id: 'salon', label: 'Salon avadanlıqları' },
  { id: 'wholesale', label: 'Topdan satış' },
  { id: 'cosmetics', label: 'Kosmetika' },
]

const BANNER_CARDS = [
  {
    id: 1,
    tag: 'Rəsmi Tərəfdaş',
    title: 'Rəsmi Partnyor Ol',
    desc: 'Mağazanı Salonbazar-da aç, minlərlə müştəriyə çat, mağazana çox müştəri cəlb et.',
    btnLabel: 'Partnyor ol',
    href: '/partnyor',
    image: image1,
  },
  {
    id: 2,
    tag: 'Topdan Satış',
    title: 'Salonlar üçün Topdan Alış',
    desc: 'Salonunuz üçün lazım olan məhsulları daha böyük həcmdə, daha sərfəli qiymətlə əldə edin.',
    btnLabel: 'Partnyor ol',
    href: '/topdan',
    image: image2,
  },
]

const BADGE_STYLES = {
  'Rəsmi Distribütor': { bg: '#a855f7', color: '#fff' },
  'Saç Qayçısı': { bg: '#0ea5e9', color: '#fff' },
  'Top Brend': { bg: '#d63384', color: '#fff' },
}

const SHOPS = [
  {
    id: 1,
    image: image1,
    name: 'Wella Professionals',
    desc: 'Dünyaca şöhrətli saç boyaları və qulluq vasitələrinin rəsmi Azərbaycan nümayəndəsi.',
    badges: ['Rəsmi Distribütor', 'Saç Qayçısı'],
    location: 'Bakı, Nəsimi rayonu',
    href: '/shop/1',
  },
  {
    id: 2,
    image: image2,
    name: "L'Oréal Partner Store",
    desc: 'Dünyaca şöhrətli saç boyaları və qulluq vasitələrinin rəsmi Azərbaycan nümayəndəsi.',
    badges: ['Rəsmi Distribütor', 'Saç Qayçısı'],
    location: 'Bakı, Nizami rayonu',
    href: '/shop/2',
  },
  {
    id: 3,
    image: image1,
    name: 'BeautyPro Market',
    desc: 'Dünyaca şöhrətli saç boyaları və qulluq vasitələrinin rəsmi Azərbaycan nümayəndəsi.',
    badges: ['Rəsmi Distribütor', 'Saç Qayçısı'],
    location: 'Bakı, Yasamal rayonu',
    href: '/shop/3',
  },
]

function ShopMain() {
  const [activeTab, setActiveTab] = useState('all')
  const [hoveredShop, setHoveredShop] = useState(null)

  return (
    <div className="shop-main">
      <div className="shop-main__container">

        {/* ── Header ── */}
        <div className="shop-main__header">
          <h1 className="shop-main__title">Partnyor Mağazalar</h1>
          <p className="shop-main__subtitle">
            Gözəllik dünyasının ən etibarlı təchizatçılarını kəşf edin. Rəsmi distribütorlar,
            salon avadanlıqları və peşəkar kosmetika mağazaları bir ünvanda.
          </p>
        </div>

        {/* ── Filter Tabs ── */}
        <div className="shop-main__tabs">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              className={`shop-main__tab ${activeTab === tab.id ? 'shop-main__tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ── Banner Cards ── */}
        <div className="shop-main__banners">
          {BANNER_CARDS.map((card) => (
            <div
              key={card.id}
              className="shop-main__banner"
              style={{ backgroundImage: `url(${card.image})` }}
            >
              <div className="shop-main__banner-overlay" />
              <div className="shop-main__banner-content">
                <span className="shop-main__banner-tag">{card.tag}</span>
                <h2 className="shop-main__banner-title">{card.title}</h2>
                <p className="shop-main__banner-desc">{card.desc}</p>
                <a href={card.href} className="shop-main__banner-btn">
                  {card.btnLabel}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* ── Popular Shops ── */}
        <div className="shop-main__section">
          <h3 className="shop-main__section-title">Populyar mağazalar</h3>

          <div className="shop-main__grid">
            {SHOPS.map((shop) => (
              <a
                key={shop.id}
                href={shop.href}
                className="shop-card2"
                onMouseEnter={() => setHoveredShop(shop.id)}
                onMouseLeave={() => setHoveredShop(null)}
              >
                {/* Image */}
                <div className="shop-card2__image-wrap">
                  <img src={shop.image} alt={shop.name} className="shop-card2__image" />
                  <div className="shop-card2__image-overlay" />
                  <div className="shop-card2__image-bottom">
                    <h4 className="shop-card2__name">{shop.name}</h4>
                    <span className="shop-card2__verified">
                      <MdVerified />
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="shop-card2__body">
                  <p className="shop-card2__desc">{shop.desc}</p>
                  <div className="shop-card2__badges">
                    {shop.badges.map((b) => {
                      const style = BADGE_STYLES[b] || { bg: '#888', color: '#fff' }
                      return (
                        <span
                          key={b}
                          className="shop-card2__badge"
                          style={{ backgroundColor: style.bg, color: style.color }}
                        >
                          {b}
                        </span>
                      )
                    })}
                  </div>
                  <div className="shop-card2__location">
                    <FiMapPin />
                    <span>{shop.location}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default ShopMain
import React, { useState } from "react";
import "./Selling.scss";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import image1 from "../../../Image/product1.png";
import image2 from "../../../Image/product2.png";

const BADGE_STYLES = {
  Endirim: { bg: "#fde8f0", color: "#d63384" },
  Yeni: { bg: "#e6f9f0", color: "#1a8a4a" },
  "Az qalıb": { bg: "#fff3cd", color: "#856404" },
  "İkinci əl": { bg: "#f0f0f0", color: "#555" },
};

const PRODUCTS = [
  {
    id: 1,
    badge: "Yeni",
    image: image1,
    brand: "Kasho Japan",
    name: "Kasho - Gold master Series",
    price: "4500 AZN",
    oldPrice: null,
    href: "/product/1",
  },
  {
    id: 2,
    badge: "Endirim",
    image: image2,
    brand: "Scissorstech",
    name: "Essentials-çəhrayı rəngli saç kəsim qayçısı",
    price: "4500 AZN",
    oldPrice: "5000 AZN",
    href: "/product/2",
  },
  {
    id: 3,
    badge: "Yeni",
    image: image1,
    brand: "Loreal",
    name: "Loreal professional hair serum",
    price: "4500 AZN",
    oldPrice: null,
    href: "/product/3",
  },
  {
    id: 4,
    badge: "Endirim",
    image: image2,
    brand: "Kérastase",
    name: "Kérastase Densifique Bain Densité",
    price: "3200 AZN",
    oldPrice: "3800 AZN",
    href: "/product/4",
  },
];

function SellingCard({ badge, image, brand, name, price, oldPrice, href }) {
  const [liked, setLiked] = useState(false);
  const badgeStyle = BADGE_STYLES[badge] || BADGE_STYLES["Yeni"];

  return (
    <div className="selling-card">
      {/* Image */}
      <div className="selling-card__image-wrap">
        <img src={image} alt={name} className="selling-card__image" />

        {badge && (
          <span
            className="selling-card__badge"
            style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.color }}
          >
            {badge}
          </span>
        )}

        <button
          className={`selling-card__wishlist ${liked ? "selling-card__wishlist--active" : ""}`}
          onClick={() => setLiked((prev) => !prev)}
          aria-label="Sevimlilərə əlavə et"
        >
          <FiHeart />
        </button>
      </div>

      {/* Body */}
      <div className="selling-card__body">
        <p className="selling-card__brand">{brand}</p>
        <h3 className="selling-card__name">{name}</h3>
      </div>

      {/* Footer */}
      <div className="selling-card__footer">
        <div className="selling-card__pricing">
          <span className="selling-card__price">{price}</span>
          {oldPrice && (
            <span className="selling-card__old-price">{oldPrice}</span>
          )}
        </div>
        <a href={href} className="selling-card__btn">
          Əlavə et <FiShoppingCart className="selling-card__btn-icon" />
        </a>
      </div>
    </div>
  );
}

function Selling() {
  const [hovered, setHovered] = useState(false);

  return (
    <section className="selling">
      <div className="selling__container">
        {/* Header */}
        <div className="selling__header">
          <div className="selling__header-left">
            <h2 className="selling__title">Ən çox satılan peşəkar məhsullar</h2>
            <p className="selling__subtitle">
              Yeni açılan salonlar və mütəxəssislər üçün seçilmiş top təkliflər
            </p>
          </div>
          <a
            href="/mehsullar"
            className={`selling__view-btn ${hovered ? "selling__view-btn--hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Hamısına bax
            <span className="selling__view-btn-icon">
              {hovered ? "↗" : "↘"}
            </span>
          </a>
        </div>

        {/* Grid */}
        <div className="selling__grid">
          {PRODUCTS.map((item) => (
            <SellingCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Selling;

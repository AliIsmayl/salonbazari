import React, { useState } from "react";
import "./Product.scss";
import { FiShoppingCart, FiHeart } from "react-icons/fi";
import image1 from "../../../Image/product1.png";
import image2 from "../../../Image/product2.png";
import image3 from "../../../Image/product3.png";

const BADGE_STYLES = {
  "İkinci əl": { bg: "#f0f0f0", color: "#555" },
  "Az qalıb": { bg: "#fff3cd", color: "#856404" },
  Endirim: { bg: "#fde8f0", color: "#d63384" },
  Yeni: { bg: "#e6f9f0", color: "#1a8a4a" },
};

const PRODUCTS = [
  {
    id: 1,
    badge: "Yeni",
    image: image1,
    brand: "The Ceel",
    name: "Saç tökülməsinə qarşı 3-lü saç baxım seti",
    price: "98 AZN",
    oldPrice: null,
    href: "/product/1",
  },
  {
    id: 2,
    badge: "Yeni",
    image: image2,
    brand: "Sigma Beauty",
    name: "Gloss-Absolu Frizz– Glaze istiyə qarşı qoruyucu krem",
    price: "58 AZN",
    oldPrice: null,
    href: "/product/2",
  },
  {
    id: 3,
    badge: "Endirim",
    image: image3,
    brand: "ScissorTech",
    name: "Matsui Rose Gold Alchei Mountain saç baxım qayçısı",
    price: "532 AZN",
    oldPrice: "564 AZN",
    href: "/product/3",
  },
  {
    id: 4,
    badge: "Endirim",
    image: image1,
    brand: "Sigma Beauty",
    name: "Essential Trio Brush Set – Göz və Üz Üçün",
    price: "132 AZN",
    oldPrice: "164 AZN",
    href: "/product/4",
  },
];

// --- SectionHeader ---
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
        <span className="section-header__btn-icon">{hovered ? "↗" : "↘"}</span>
      </a>
    </div>
  );
}

// --- ProductCard ---
function ProductCard({ badge, image, brand, name, price, oldPrice, href }) {
  const [liked, setLiked] = useState(false);
  const badgeStyle = BADGE_STYLES[badge] || BADGE_STYLES["Yeni"];

  return (
    <div className="product-card">
      {/* Image */}
      <div className="product-card__image-wrap">
        <img src={image} alt={name} className="product-card__image" />

        {badge && (
          <span
            className="product-card__badge"
            style={{ backgroundColor: badgeStyle.bg, color: badgeStyle.color }}
          >
            {badge}
          </span>
        )}

        <button
          className={`product-card__wishlist ${liked ? "product-card__wishlist--active" : ""}`}
          onClick={() => setLiked((prev) => !prev)}
          aria-label="Sevimlilərə əlavə et"
        >
          <FiHeart />
        </button>
      </div>

      {/* Body */}
      <div className="product-card__body">
        <p className="product-card__brand">{brand}</p>
        <h3 className="product-card__name">{name}</h3>
      </div>

      {/* Footer — qiymət sol, buton sağ */}
      <div className="product-card__footer">
        <div className="product-card__pricing">
          <span className="product-card__price">{price}</span>
          {oldPrice && (
            <span className="product-card__old-price">{oldPrice}</span>
          )}
        </div>

        <a href={href} className="product-card__btn" aria-label="Əlavə et">
          Əlavə et <FiShoppingCart className="product-card__btn-icon" />
        </a>
      </div>
    </div>
  );
}

// --- Product Section ---
function Product() {
  return (
    <section className="product">
      <div className="product__container">
        <SectionHeader
          title="Bazardakı məhsullar"
          subtitle="Seçilmiş professional gözəllik məhsulları"
          href="/mehsullar"
        />

        <div className="product__grid">
          {PRODUCTS.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Product;

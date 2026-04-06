import React, { useState } from "react";
import "./ProductsMain.scss";

const products = [
  {
    id: 1,
    brand: "Sigma Beauty",
    name: "Essential Trio Brush Set – Göz və Üz Üçün",
    desc: "Klassik qırmızı mal dəstəsi boyası. Bütün dəri fənlərinə uyğun universal rəng.",
    price: 128,
    oldPrice: 189,
    discount: 20,
    badge: "Yeni",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 2,
    brand: "Mister Electronic",
    name: "Fen-fırça Panasonic EH-KABl-W615",
    desc: "Klassik qırmızı mal dəstəsi boyası. Bütün dəri fənlərinə yararlı barabar adlıdır fen.",
    price: 154,
    oldPrice: 250,
    discount: 20,
    badge: "Yeni",
    image:
      "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 3,
    brand: "Sigma Beauty",
    name: "Essential Trio Brush Set – Göz və Üz Üçün",
    desc: "Klassik qırmızı mal dəstəsi boyası. Bütün dəri fənlərinə uyğun universal rəng.",
    price: 128,
    oldPrice: 189,
    discount: 20,
    badge: "Yeni",
    image:
      "https://images.unsplash.com/photo-1583241475880-083f84372725?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 4,
    brand: "ERA Cosmetic",
    name: "Kerastase–Saçların qidalanığı üçün şampun",
    desc: "Uşaqlar üçün bütün saç tiplərinə uyğun şəklinə.",
    price: 49.87,
    oldPrice: null,
    discount: null,
    badge: "Yeni",
    image:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 5,
    brand: "Makiyaj Cosmetic",
    name: "Difeel Premium Vegan Keratin Hair Oil",
    desc: "Saçlar üçün mineral Difeel premium. Vegan Keratin Hair Oil – Anti-Frizz & Shi...",
    price: 67.23,
    oldPrice: null,
    discount: null,
    badge: "İkinci əl",
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=400&h=300&fit=crop&auto=format",
  },
  {
    id: 6,
    brand: "My Luna",
    name: "Saç bərpası dəsti Olaplex",
    desc: "Olaplex №6 saç məhkəmlendirici bəstər. 155 ml + Olaplex №4 saç maskası 100...",
    price: 94,
    oldPrice: 110,
    discount: 20,
    badge: null,
    image:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=400&h=300&fit=crop&auto=format",
  },
];

/* ── Icons ── */
const IcCart = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
    <path
      d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <path
      d="M3 6h18M16 10a4 4 0 0 1-8 0"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
const IcHeart = ({ on }) => (
  <svg
    width="15"
    height="15"
    fill={on ? "currentColor" : "none"}
    viewBox="0 0 24 24"
  >
    <path
      d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinejoin="round"
    />
  </svg>
);
const IcSearch = () => (
  <svg width="15" height="15" fill="none" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M21 21l-4.35-4.35"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
const IcChevron = () => (
  <svg width="12" height="12" fill="none" viewBox="0 0 24 24">
    <path
      d="M6 9l6 6 6-6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ── Select ── */
function Select({ label, placeholder, options }) {
  const [open, setOpen] = useState(false);
  const [val, setVal] = useState(null);

  return (
    <div className={`pms${open ? " pms--open" : ""}`}>
      <span className="pms__label">{label}</span>
      <button className="pms__trigger" onClick={() => setOpen((o) => !o)}>
        <span className={val ? "pms__val" : "pms__ph"}>
          {val || placeholder}
        </span>
        <IcChevron />
      </button>
      {open && (
        <>
          <div className="pms__bd" onClick={() => setOpen(false)} />
          <ul className="pms__menu">
            {options.map((o) => (
              <li
                key={o}
                className={`pms__item${val === o ? " pms__item--on" : ""}`}
                onClick={() => {
                  setVal(o);
                  setOpen(false);
                }}
              >
                {o}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

/* ── Card ── */
function Card({ p }) {
  const [liked, setLiked] = useState(false);
  return (
    <article className="pm-card">
      <div className="pm-card__img-box">
        {/* badges */}
        <div className="pm-card__tags">
          {p.discount && (
            <span className="pm-card__tag pm-card__tag--sale">
              {p.discount}% endirim
            </span>
          )}
          {p.badge && (
            <span className="pm-card__tag pm-card__tag--new">{p.badge}</span>
          )}
        </div>
        {/* heart */}
        <button
          className={`pm-card__heart${liked ? " pm-card__heart--on" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          <IcHeart on={liked} />
        </button>
        <img src={p.image} alt={p.name} className="pm-card__img" />
      </div>

      <div className="pm-card__body">
        <p className="pm-card__brand">{p.brand}</p>
        <h3 className="pm-card__name">{p.name}</h3>
        <p className="pm-card__desc">{p.desc}</p>
        <div className="pm-card__foot">
          <div className="pm-card__prices">
            <span className="pm-card__price">{p.price} AZN</span>
            {p.oldPrice && (
              <span className="pm-card__old">{p.oldPrice} AZN</span>
            )}
          </div>
          <button className="pm-card__btn">
            <IcCart /> Əlavə et
          </button>
        </div>
      </div>
    </article>
  );
}

/* ── Main ── */
export default function ProductsMain() {
  return (
    <div className="pm">
      <div className="pm__wrap">
        {/* header */}
        <header className="pm-hd">
          <h1 className="pm-hd__title">Mağazaları axtar</h1>
          <p className="pm-hd__sub">
            Etibarlı və yüksək keyfiyyətli məhsul taqdim edən mağazalar
          </p>
        </header>

        {/* filter box */}
        <div className="pm-fb">
          <div className="pm-fb__row">
            <Select
              label="Kateqoriya"
              placeholder="Kateqoriya"
              options={[
                "Hamısı",
                "Saç məhsulları",
                "Üz qulluğu",
                "Makiyaj",
                "Dırnaq",
              ]}
            />
            <div className="pm-fb__sep" />
            <Select
              label="Qiymət"
              placeholder="Qiymət"
              options={[
                "Hamısı",
                "0–50 AZN",
                "50–100 AZN",
                "100–200 AZN",
                "200+ AZN",
              ]}
            />
            <div className="pm-fb__sep" />
            <Select
              label="Brend"
              placeholder="Brend"
              options={[
                "Hamısı",
                "Sigma Beauty",
                "Kerastase",
                "Olaplex",
                "Panasonic",
              ]}
            />
            <div className="pm-fb__sep" />
            <Select
              label="Vəziyyəti"
              placeholder="Vəziyyəti"
              options={["Hamısı", "Yeni", "İkinci əl"]}
            />
            <div className="pm-fb__sep" />
            <Select
              label="Mövcudluq"
              placeholder="Yeni"
              options={["Yeni", "Mövcud", "Stokda yoxdur"]}
            />
            <div className="pm-fb__actions">
              <button className="pm-fb__btn">
                <IcSearch /> Axtar
              </button>
              <button className="pm-fb__icon">
                <IcSearch />
              </button>
            </div>
          </div>
        </div>

        {/* toolbar */}
        <div className="pm-tb">
          <p className="pm-tb__count">
            <strong>127</strong> məhsul tapıldı
          </p>
          <button className="pm-tb__sort">
            Yenidən köhnəyə <IcChevron />
          </button>
        </div>

        {/* grid */}
        <div className="pm-grid">
          {products.map((p) => (
            <Card key={p.id} p={p} />
          ))}
        </div>
      </div>
    </div>
  );
}

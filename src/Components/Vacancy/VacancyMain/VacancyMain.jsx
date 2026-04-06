import React, { useState } from "react";
import "./VacancyMain.scss";

const vacancies = [
  {
    id: 1,
    badge: "Yeni",
    title: "Saç ustası",
    description:
      "Müasir salonumuzda işləmək üçün təcrübəli saç ustası axtarırıq.",
    location: "Bakı şəhəri, Nəsimi rayonu",
    type: "Tam ştat",
    salary: "800–1500 AZN",
    requirements: [
      "Minimum 2 il təcrübə",
      "Peşəkar sertifikat",
      "Müştəri yönümlü yanaşma",
    ],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path
          d="M9.5 2a.5.5 0 0 1 .5.5V5h4V2.5a.5.5 0 0 1 1 0V5h1a2 2 0 0 1 2 2v1.5c0 1.2-.6 2.3-1.6 3L18 19a1 1 0 1 1-1.9.6L14.4 14H9.6L7.9 19.6A1 1 0 1 1 6 19l1.6-7.5A3.5 3.5 0 0 1 6 8.5V7a2 2 0 0 1 2-2h1V2.5a.5.5 0 0 1 .5-.5zM8 7v1.5A1.5 1.5 0 0 0 9.5 10h5A1.5 1.5 0 0 0 16 8.5V7H8z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    id: 2,
    badge: "Yeni",
    title: "Manikür/Pedikür ustası",
    description: "Nail art və dizayn sahəsində təcrübəli usta axtarırıq.",
    location: "Bakı şəhəri, Yasamal rayonu",
    type: "Tam ştat",
    salary: "700–1300 AZN",
    requirements: [
      "Minimum 1 il təcrübə",
      "Nail art bilikləri",
      "Gel polish təcrübəsi",
    ],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path
          d="M8.5 3C7 3 5.5 4.2 5.5 6.5L4 19h16l-1.5-12.5C18.5 4.2 17 3 15.5 3h-7z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M9 3c0 2 6 2 6 0"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M4 19h16"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 3,
    badge: "Yeni",
    title: "Makiyaj ustası",
    description: "Gündəlik və xüsusi tədbirlər üçün makiyaj ustası axtarırıq.",
    location: "Bakı şəhəri, Nərimanov rayonu",
    type: "Part-time",
    salary: "600–1200 AZN",
    requirements: [
      "Portfolio tələb olunur",
      "Gəlin makiyajı təcrübəsi",
      "Öz alətləri",
    ],
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 3c-1.5 0-4 1.5-4 5 0 2 1 3.5 2 4.5L8 21h8l-2-8.5c1-1 2-2.5 2-4.5 0-3.5-2.5-5-4-5z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
        <path
          d="M10 10.5c.6.3 1.3.5 2 .5s1.4-.2 2-.5"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M8 21h8"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const benefits = [
  {
    title: "Geniş müştəri bazası",
    desc: "50.000+ aktiv istifadəçi ilə daima dolu iş təqvimi.",
    svg: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path
          d="M17 20c0-2.21-2.239-4-5-4s-5 1.79-5 4"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.7" />
        <path
          d="M23 20c0-1.864-1.567-3.411-3.5-3.5M20.5 8a3.5 3.5 0 0 1 0 7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M1 20c0-1.864 1.567-3.411 3.5-3.5M3.5 8a3.5 3.5 0 0 0 0 7"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Gəlir artımı",
    desc: "Orta hesabla 40% gəlir artımı ilə daha çox qazanın.",
    svg: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path
          d="M3 17l4-4 4 4 4-6 4 3"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3 21h18"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Asan idarəetmə",
    desc: "İş qrafikini rahat idarə edin, müştəriləri izləyin.",
    svg: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <rect
          x="3"
          y="4"
          width="18"
          height="17"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.7"
        />
        <path
          d="M3 9h18M8 4V2M16 4V2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
        <path
          d="M7 13h2m4 0h2M7 17h2m4 0h2"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Reputasiya Qurma",
    desc: "Reylər və reytinqlər vasitəsilə brendinizi gücləndirin.",
    svg: (
      <svg width="26" height="26" fill="none" viewBox="0 0 24 24">
        <path
          d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

const IconLocation = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
    <path
      d="M12 2C8.686 2 6 4.686 6 8c0 5.25 6 14 6 14s6-8.75 6-14c0-3.314-2.686-6-6-6z"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <circle cx="12" cy="8" r="2" stroke="currentColor" strokeWidth="1.8" />
  </svg>
);
const IconClock = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M12 7v5l3 3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
const IconWallet = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
    <rect
      x="2"
      y="6"
      width="20"
      height="14"
      rx="2"
      stroke="currentColor"
      strokeWidth="1.8"
    />
    <path
      d="M2 10h20M16 16h2"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);
const IconSend = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path
      d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
const IconClose = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24">
    <path
      d="M18 6L6 18M6 6l12 12"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
const IconUpload = () => (
  <svg width="13" height="13" fill="none" viewBox="0 0 24 24">
    <path
      d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function Modal({ vacancy, onClose }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [motivation, setMotivation] = useState("");
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files[0]) setFileName(e.target.files[0].name);
  };

  return (
    <div className="vm-overlay" onClick={onClose}>
      <div className="vm-modal" onClick={(e) => e.stopPropagation()}>
        <div className="vm-modal__head">
          <div>
            <h2 className="vm-modal__title">{vacancy.title}</h2>
            <p className="vm-modal__subtitle">
              Bu vakansiya üçün müraciət forması
            </p>
          </div>
          <button className="vm-modal__x" onClick={onClose} aria-label="Bağla">
            <IconClose />
          </button>
        </div>

        <div className="vm-modal__field">
          <label>Ad, soyad</label>
          <input
            type="text"
            placeholder="Aynur Abdullayeva"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="vm-modal__row">
          <div className="vm-modal__field">
            <label>CV yüklə</label>
            <div className="vm-modal__file">
              <span className="vm-modal__file-name">
                {fileName || "CV faylı"}
              </span>
              <label className="vm-modal__file-btn">
                <IconUpload /> Fayl yüklə
                <input type="file" hidden onChange={handleFileChange} />
              </label>
            </div>
          </div>
          <div className="vm-modal__field">
            <label>Əlaqə nömrəsi</label>
            <input
              type="tel"
              placeholder="+994 50 *** ** **"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="vm-modal__field">
          <label>Motivasiya məktubu</label>
          <textarea
            placeholder="Özünüz haqqında qısa məlumat"
            value={motivation}
            onChange={(e) => setMotivation(e.target.value)}
          />
        </div>

        <div className="vm-modal__actions">
          <button className="vm-modal__cancel" onClick={onClose}>
            <IconClose /> Ləğv et
          </button>
          <button className="vm-modal__submit">
            <IconSend /> Müraciət et
          </button>
        </div>
      </div>
    </div>
  );
}

function VacancyMain() {
  const [selectedVacancy, setSelectedVacancy] = useState(null);

  return (
    <div className="vm">
      {/* ── Vacancies ── */}
      <section className="vm-vacancies">
        <div className="vm__container">
          <div className="vm-section-head">
            <h2 className="vm-section-head__title">Aktiv vakansiyalar</h2>
            <p className="vm-section-head__sub">Sizə uyğun mövqeni tapın</p>
          </div>

          <div className="vm-cards">
            {vacancies.map((v) => (
              <article className="vm-card" key={v.id}>
                <div className="vm-card__top">
                  <span className="vm-card__icon">{v.icon}</span>
                  <span className="vm-card__badge">{v.badge}</span>
                </div>

                <h3 className="vm-card__title">{v.title}</h3>
                <p className="vm-card__desc">{v.description}</p>

                <ul className="vm-card__meta">
                  <li>
                    <IconLocation />
                    {v.location}
                  </li>
                  <li>
                    <IconClock />
                    {v.type}
                  </li>
                  <li>
                    <IconWallet />
                    {v.salary}
                  </li>
                </ul>

                <div className="vm-card__divider" />

                <p className="vm-card__req-label">Tələblər</p>
                <ul className="vm-card__reqs">
                  {v.requirements.map((r, i) => (
                    <li key={i}>
                      <span className="vm-card__check" />
                      {r}
                    </li>
                  ))}
                </ul>

                <button
                  className="vm-card__btn"
                  onClick={() => setSelectedVacancy(v)}
                >
                  <IconSend /> Müraciət et
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="vm-why">
        <div className="vm__container">
          <div className="vm-section-head">
            <h2 className="vm-section-head__title">
              Niyə Bizimlə İşləməlisiniz?
            </h2>
            <p className="vm-section-head__sub">
              Platformamızda işləməyin üstünlükləri və karyera imkanları
            </p>
          </div>
          <div className="vm-why__grid">
            {benefits.map((b, i) => (
              <div className="vm-why__item" key={i}>
                <span className="vm-why__icon">{b.svg}</span>
                <h4 className="vm-why__item-title">{b.title}</h4>
                <p className="vm-why__item-desc">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedVacancy && (
        <Modal
          vacancy={selectedVacancy}
          onClose={() => setSelectedVacancy(null)}
        />
      )}
    </div>
  );
}

export default VacancyMain;

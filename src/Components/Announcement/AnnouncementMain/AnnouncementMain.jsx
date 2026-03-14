import React, { useState } from "react";
import {
  FiScissors,
  FiZap,
  FiDroplet,
  FiWind,
  FiStar,
  FiChevronDown,
  FiMinus,
  FiPlus,
  FiUploadCloud,
  FiImage,
  FiArrowLeft,
  FiArrowRight,
  FiCheck,
  FiAlertCircle,
  FiPackage,
  FiTruck,
  FiHome,
  FiTool,
} from "react-icons/fi";
import { MdOutlineChairAlt } from "react-icons/md";
import "./AnnouncementMain.scss";

const CATEGORIES = [
  {
    id: 1,
    icon: <FiScissors />,
    name: "Qayçılar",
    desc: "Professional saç makasları və dəqiqlik alətləri",
  },
  {
    id: 2,
    icon: <FiZap />,
    name: "Daraqlar və fırçalar",
    desc: "Saç düzəltmə və stil vermə vasitələri",
  },
  {
    id: 3,
    icon: <FiDroplet />,
    name: "Saç boyaları və baxım",
    desc: "Rəng məhsulları və intensiv baxım seriyaları",
  },
  {
    id: 4,
    icon: <FiWind />,
    name: "Fen və difuzzorlar",
    desc: "Qurutma texnologiyası, həcm və parlaqlıq",
  },
  {
    id: 5,
    icon: <FiStar />,
    name: "Digər gözəllik məhsulları",
    desc: "Xüsusi baxım və gözəllik həlləri",
  },
  {
    id: 6,
    icon: <MdOutlineChairAlt />,
    name: "Salon avadanlıqları",
    desc: "Peşəkar salon mebeli və texnikası",
  },
];

const BRANDS = [
  "Wella",
  "Schwarzkopf",
  "L'Oréal",
  "Kérastase",
  "Redken",
  "Davines",
];

export default function AnnouncementMain() {
  const [step, setStep] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [form, setForm] = useState({
    name: "",
    category: "Saç baxım məhsulları",
    brand: "",
    price: "",
    quantity: 0,
    description: "",
    usage: "",
    suitability: "salon_home",
  });
  const [condition, setCondition] = useState("used");
  const [delivery, setDelivery] = useState("salon");
  const [warranty, setWarranty] = useState(false);
  const [warrantyText, setWarrantyText] = useState("");
  const [extra, setExtra] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [usageError, setUsageError] = useState(false);

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));
  const handleUsage = (val) => {
    setUsageError(val.length > 100);
    setForm((f) => ({ ...f, usage: val }));
  };

  const STEPS = [
    { num: 1, label: "Kateqoriya seçimi", hint: "Məhsul tipini seçin" },
    { num: 2, label: "Məhsul məlumatları", hint: "Ad, qiymət, təsvir" },
    { num: 3, label: "Şəkillər və əlavə", hint: "Şəkil və çatdırılma" },
  ];

  return (
    <div className="ann">
      <div className="ann__container">
        <div className="ann__header">
          <span className="ann__badge">Yeni Elan</span>
          <h1 className="ann__title">Elanınızı yaradın</h1>
          <p className="ann__subtitle">
            Salon və gözəllik mütəxəssisləri üçün peşəkar məhsul elanınızı bir
            neçə addımda dərc edin.
          </p>
        </div>

        <div className="ann__layout">
          {/* Sidebar */}
          <aside className="ann__sidebar">
            <p className="ann__sidebar-heading">Elan addımları</p>
            <p className="ann__sidebar-sub">
              Məlumatları ardıcıllıqla doldurun və elanınızı dərc edin.
            </p>
            <ul className="ann__steps">
              {STEPS.map((s, i) => (
                <li
                  key={s.num}
                  className={`ann__step${step === s.num ? " ann__step--active" : ""}${step > s.num ? " ann__step--done" : ""}`}
                >
                  <div className="ann__step-left">
                    <span className="ann__step-num">
                      {step > s.num ? <FiCheck size={12} /> : s.num}
                    </span>
                    {i < STEPS.length - 1 && (
                      <span className="ann__step-connector" />
                    )}
                  </div>
                  <div className="ann__step-body">
                    <span className="ann__step-label">{s.label}</span>
                    <span className="ann__step-hint">{s.hint}</span>
                  </div>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Panel */}
          <div className="ann__panel">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="ann__card">
                <div className="ann__card-head">
                  <h2>Məhsul kateqoriyasını seçin</h2>
                  <p>
                    Yalnız salon və gözəllik üçün nəzərdə tutulmuş kateqoriyalar
                    mövcuddur.
                  </p>
                </div>
                <div className="ann__grid">
                  {CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      className={`ann__cat${selectedCategory === cat.id ? " ann__cat--active" : ""}`}
                      onClick={() => setSelectedCategory(cat.id)}
                    >
                      <span className="ann__cat-icon">{cat.icon}</span>
                      <span className="ann__cat-name">{cat.name}</span>
                      <span className="ann__cat-desc">{cat.desc}</span>
                      {selectedCategory === cat.id && (
                        <span className="ann__cat-badge">
                          <FiCheck size={10} />
                        </span>
                      )}
                    </button>
                  ))}
                </div>
                <div className="ann__actions ann__actions--end">
                  <button
                    className="ann__btn ann__btn--primary"
                    disabled={!selectedCategory}
                    onClick={() => setStep(2)}
                  >
                    Növbəti <FiArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="ann__card">
                <div className="ann__card-head">
                  <h2>Məhsul məlumatları</h2>
                  <p>
                    Alıcıların məhsulu asanlıqla tapması üçün əsas məlumatları
                    doldurun.
                  </p>
                </div>

                <div className="ann__field">
                  <label>Məhsulun adı</label>
                  <input
                    type="text"
                    placeholder="Məhsulun adını daxil edin"
                    value={form.name}
                    onChange={set("name")}
                  />
                </div>

                <div className="ann__row">
                  <div className="ann__field">
                    <label>Kateqoriya</label>
                    <div className="ann__select">
                      <select value={form.category} onChange={set("category")}>
                        {CATEGORIES.map((c) => (
                          <option key={c.id}>{c.name}</option>
                        ))}
                      </select>
                      <FiChevronDown
                        size={14}
                        className="ann__select-chevron"
                      />
                    </div>
                  </div>
                  <div className="ann__field">
                    <label>Brend</label>
                    <div className="ann__select">
                      <select value={form.brand} onChange={set("brand")}>
                        <option value="">Brendin adı</option>
                        {BRANDS.map((b) => (
                          <option key={b}>{b}</option>
                        ))}
                      </select>
                      <FiChevronDown
                        size={14}
                        className="ann__select-chevron"
                      />
                    </div>
                  </div>
                </div>

                <div className="ann__row">
                  <div className="ann__field">
                    <label>Qiymət</label>
                    <div className="ann__price-wrap">
                      <span className="ann__currency">₼</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={form.price}
                        onChange={set("price")}
                      />
                    </div>
                  </div>
                  <div className="ann__field">
                    <label>Miqdar</label>
                    <div className="ann__qty">
                      <button
                        type="button"
                        onClick={() =>
                          setForm((f) => ({
                            ...f,
                            quantity: Math.max(0, f.quantity - 1),
                          }))
                        }
                      >
                        <FiMinus size={12} />
                      </button>
                      <span>{form.quantity}</span>
                      <button
                        type="button"
                        onClick={() =>
                          setForm((f) => ({ ...f, quantity: f.quantity + 1 }))
                        }
                      >
                        <FiPlus size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="ann__field">
                  <label>Məhsulun təsviri</label>
                  <input
                    type="text"
                    placeholder="Məhsulu qısaca təsvir edin"
                    value={form.description}
                    onChange={set("description")}
                  />
                </div>

                <div className="ann__field">
                  <label>İstifadə məlumatı</label>
                  <input
                    type="text"
                    placeholder="Qulluq qaydaları və salon üçün tövsiyələr"
                    value={form.usage}
                    onChange={(e) => handleUsage(e.target.value)}
                    className={usageError ? "ann__input--error" : ""}
                  />
                  {usageError && (
                    <span className="ann__error">
                      <FiAlertCircle size={12} /> 100 simvoldan çox istifadə
                      olunub
                    </span>
                  )}
                </div>

                <div className="ann__field">
                  <label>Uyğunluq</label>
                  <div className="ann__radio-group">
                    {[
                      { val: "salon_only", label: "Yalnız peşəkar salon üçün" },
                      {
                        val: "salon_home",
                        label: "Salon və ev istifadəsi üçün",
                      },
                    ].map((opt) => (
                      <label
                        key={opt.val}
                        className={`ann__radio${form.suitability === opt.val ? " ann__radio--active" : ""}`}
                      >
                        <input
                          type="radio"
                          name="suitability"
                          value={opt.val}
                          checked={form.suitability === opt.val}
                          onChange={() =>
                            setForm((f) => ({ ...f, suitability: opt.val }))
                          }
                        />
                        <span className="ann__radio-dot" />
                        {opt.label}
                      </label>
                    ))}
                  </div>
                </div>

                <div className="ann__actions ann__actions--between">
                  <button
                    className="ann__btn ann__btn--ghost"
                    onClick={() => setStep(1)}
                  >
                    <FiArrowLeft size={14} /> Geri qayıt
                  </button>
                  <button
                    className="ann__btn ann__btn--primary"
                    onClick={() => setStep(3)}
                  >
                    Növbəti <FiArrowRight size={14} />
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div className="ann__card">
                <div className="ann__card-head">
                  <h2>Şəkillər və əlavə məlumatlar</h2>
                  <p>
                    Keyfiyyətli şəkillər məhsulunuzun daha tez satılmasına kömək
                    edir.
                  </p>
                </div>

                <div
                  className={`ann__drop${dragOver ? " ann__drop--over" : ""}`}
                  onDragOver={(e) => {
                    e.preventDefault();
                    setDragOver(true);
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                  }}
                >
                  <FiUploadCloud className="ann__drop-icon" />
                  <p className="ann__drop-title">
                    Şəkilləri bura sürükləyin və ya seçin
                  </p>
                  <p className="ann__drop-sub">JPEG, PNG — Maks. 10MB</p>
                  <button className="ann__btn ann__btn--outline">
                    <FiImage size={13} /> Fayl seç
                  </button>
                </div>

                <div className="ann__img-slots">
                  {["Şəkil 1", "Şəkil 2", "Şəkil 3"].map((l, i) => (
                    <div key={i} className="ann__img-slot">
                      <FiImage size={15} />
                      <span>{l}</span>
                    </div>
                  ))}
                </div>

                <div className="ann__row">
                  <div className="ann__field">
                    <label>Məhsulun vəziyyəti</label>
                    <div className="ann__radio-group">
                      {[
                        {
                          val: "new",
                          label: "Yeni",
                          icon: <FiPackage size={13} />,
                        },
                        {
                          val: "used",
                          label: "İşlənmiş",
                          icon: <FiTool size={13} />,
                        },
                      ].map((opt) => (
                        <label
                          key={opt.val}
                          className={`ann__radio${condition === opt.val ? " ann__radio--active" : ""}`}
                        >
                          <input
                            type="radio"
                            name="condition"
                            checked={condition === opt.val}
                            onChange={() => setCondition(opt.val)}
                          />
                          <span className="ann__radio-dot" />
                          {opt.icon} {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div className="ann__field">
                    <label>Çatdırılma</label>
                    <div className="ann__radio-group">
                      {[
                        {
                          val: "courier",
                          label: "Kuryer",
                          icon: <FiTruck size={13} />,
                        },
                        {
                          val: "salon",
                          label: "Salонdan",
                          icon: <FiHome size={13} />,
                        },
                      ].map((opt) => (
                        <label
                          key={opt.val}
                          className={`ann__radio${delivery === opt.val ? " ann__radio--active" : ""}`}
                        >
                          <input
                            type="radio"
                            name="delivery"
                            checked={delivery === opt.val}
                            onChange={() => setDelivery(opt.val)}
                          />
                          <span className="ann__radio-dot" />
                          {opt.icon} {opt.label}
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="ann__field">
                  <label
                    className={`ann__checkbox-label${warranty ? " ann__checkbox-label--active" : ""}`}
                    onClick={() => setWarranty((w) => !w)}
                  >
                    <span className="ann__checkbox-box">
                      {warranty && <FiCheck size={11} />}
                    </span>
                    Zəmanət verilir mi?
                  </label>
                  {warranty && (
                    <input
                      type="text"
                      className="ann__warranty"
                      placeholder="Neçə müddət ərzində zəmanət verildiyini qeyd edin."
                      value={warrantyText}
                      onChange={(e) => setWarrantyText(e.target.value)}
                    />
                  )}
                </div>

                <div className="ann__field">
                  <label>Əlavə məlumatlar</label>
                  <textarea
                    rows={3}
                    placeholder='Məsələn: "Məhsulun çatdırılması yalnız Bakı ərazisində mümkündür."'
                    value={extra}
                    onChange={(e) => setExtra(e.target.value)}
                  />
                </div>

                <div className="ann__actions ann__actions--between">
                  <button
                    className="ann__btn ann__btn--ghost"
                    onClick={() => setStep(2)}
                  >
                    <FiArrowLeft size={14} /> Geri qayıt
                  </button>
                  <button className="ann__btn ann__btn--primary">
                    Elanı dərc et <FiCheck size={14} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

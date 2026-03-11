import { useState } from "react";
import "./ForgotMain.scss";

const MailIcon = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function ForgotMain() {
  const [email, setEmail] = useState("");

  return (
    <div className="fp-wrapper">
      <div className="fp-card">
        <h1 className="fp-title">Şifrəmi unutdum</h1>
        <p className="fp-subtitle">
          Emailinizi daxil edin — şifrənizi yeniləmək üçün sizə link
          göndərəcəyik.
        </p>

        <div className="fp-field">
          <label className="fp-label">Email</label>
          <div className="fp-input-box">
            <span className="fp-input-icon">
              <MailIcon />
            </span>
            <div className="fp-input-divider" />
            <input
              type="email"
              className="fp-input"
              placeholder="E-mailinizi daxil edin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <button className="fp-submit">Link göndər</button>
        <button className="fp-back">Geri qayıt</button>
      </div>
    </div>
  );
}
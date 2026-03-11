import { useState } from "react";
import "./LoginMain.scss";

const LockIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);

const EyeOffIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);

const EyeIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 48 48">
    <path
      fill="#FFC107"
      d="M43.6 20.1H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.5 29.5 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 16 19.1 13 24 13c3.1 0 5.8 1.2 7.9 3.1l5.7-5.7C34.5 6.5 29.5 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35.5 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8H6.1C9.5 35.7 16.3 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.1H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.2 5.6l6.2 5.2C41.3 35.7 44 30.2 44 24c0-1.3-.1-2.6-.4-3.9z"
    />
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 50 50">
    <path
      fill="#1877F2"
      d="M25 2C12.3 2 2 12.3 2 25c0 11.5 8.4 21 19.4 22.7V31.4h-5.8V25h5.8v-5c0-5.8 3.4-9 8.7-9 2.5 0 5.2.4 5.2.4v5.7h-2.9c-2.9 0-3.8 1.8-3.8 3.6V25h6.4l-1 6.4h-5.4V47.7C39.6 46 48 36.5 48 25 48 12.3 37.7 2 25 2z"
    />
    <path
      fill="#fff"
      d="M33.1 31.4l1-6.4h-6.4v-4.2c0-1.8.9-3.6 3.8-3.6h2.9V11.5s-2.6-.4-5.2-.4c-5.3 0-8.7 3.2-8.7 9V25h-5.8v6.4h5.8v16.3c1.2.2 2.4.3 3.6.3s2.4-.1 3.6-.3V31.4h5.4z"
    />
  </svg>
);

export default function LoginMain() {
  const [activeTab, setActiveTab] = useState("email");
  const [showPass, setShowPass] = useState(false);
  const [remember, setRemember] = useState(false);

  return (
    <div className="lm-wrapper">
      <div className="lm-card">
        <h1 className="lm-title">Xoş gəlmişsiniz!</h1>
        <p className="lm-subtitle">Hesabınıza daxil olun.</p>

        {/* Tabs */}
        <div className="lm-tabs">
          <button
            className={`lm-tab ${activeTab === "email" ? "lm-tab--active" : ""}`}
            onClick={() => setActiveTab("email")}
          >
            <LockIcon />
            Daxil ol
          </button>
          <button
            className={`lm-tab ${activeTab === "otp" ? "lm-tab--active" : ""}`}
            onClick={() => setActiveTab("otp")}
          >
            <PhoneIcon />
            OTP ilə
          </button>
        </div>

        {/* Email Form */}
        {activeTab === "email" && (
          <div className="lm-form">
            <div className="lm-field">
              <label className="lm-label">Email</label>
              <div className="lm-input-wrap lm-input-wrap--filled">
                <input
                  type="email"
                  className="lm-input"
                  defaultValue="Salonbazar26@gmail.com"
                  placeholder="Email ünvanınızı daxil edin"
                />
              </div>
            </div>

            <div className="lm-field">
              <label className="lm-label">Şifrə</label>
              <div className="lm-input-wrap">
                <input
                  type={showPass ? "text" : "password"}
                  className="lm-input lm-input--pr"
                  placeholder="Şifrəni daxil edin"
                />
                <button
                  className="lm-eye"
                  onClick={() => setShowPass(!showPass)}
                >
                  {showPass ? <EyeIcon /> : <EyeOffIcon />}
                </button>
              </div>
            </div>

            <div className="lm-options">
              <label className="lm-remember">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <span>Məni xatırla</span>
              </label>
              <a href="#" className="lm-forgot">
                Şifrəni unutmusuz?
              </a>
            </div>

            <button className="lm-submit">Daxil ol</button>
          </div>
        )}

        {/* OTP Form */}
        {activeTab === "otp" && (
          <div className="lm-form">
            <div className="lm-field">
              <label className="lm-label">Telefon nömrəsi</label>
              <div className="lm-phone-wrap">
                <div className="lm-phone-prefix">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.45 2 2 0 0 1 3.56 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.9a16 16 0 0 0 6 6l.9-.9a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z" />
                  </svg>
                  +994
                </div>
                <input
                  type="tel"
                  className="lm-phone-input"
                  placeholder="xx xxx xx xx"
                />
              </div>
            </div>

            <button className="lm-submit">OTP göndər</button>
          </div>
        )}

        {/* Divider */}
        <div className="lm-divider">
          <span>və ya</span>
        </div>

        {/* Social */}
        <div className="lm-social">
          <button className="lm-social-btn">
            <GoogleIcon />
            Google ilə daxil ol
          </button>
          <button className="lm-social-btn">
            <FacebookIcon />
            Facebook ilə daxil ol
          </button>
        </div>

        {/* Footer */}
        <p className="lm-footer">
          Hesabınız yoxdur? <a href="#">Qeydiyyatdan keç</a>
        </p>
      </div>
    </div>
  );
}

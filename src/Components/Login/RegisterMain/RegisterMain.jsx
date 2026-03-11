import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import "./RegisterMain.scss";

function RegisterMain() {
  const [form, setForm] = useState({ fullName: "", email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [focused, setFocused] = useState("");

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  return (
    <div className="rg-wrapper">
      <div className="rg-card">
        <h1 className="rg-title">Qeydiyyat</h1>
        <p className="rg-subtitle">Yeni hesab yaradın Yeni hesab yaradın</p>

        <div className="rg-form">
          {/* Ad soyad */}
          <div className="rg-field">
            <label className="rg-label">Ad soyad</label>
            <div
              className={`rg-input-wrap ${focused === "fullName" || form.fullName ? "rg-input-wrap--pink" : ""}`}
            >
              <User size={16} className="rg-icon" />
              <input
                name="fullName"
                type="text"
                className="rg-input"
                placeholder="Adınız"
                value={form.fullName}
                onChange={handleChange}
                onFocus={() => setFocused("fullName")}
                onBlur={() => setFocused("")}
              />
            </div>
          </div>

          {/* E-mail */}
          <div className="rg-field">
            <label className="rg-label">E-mail</label>
            <div
              className={`rg-input-wrap ${focused === "email" ? "rg-input-wrap--pink" : ""}`}
            >
              <Mail size={16} className="rg-icon" />
              <input
                name="email"
                type="email"
                className="rg-input"
                placeholder="Salonbazar26@gmail.com"
                value={form.email}
                onChange={handleChange}
                onFocus={() => setFocused("email")}
                onBlur={() => setFocused("")}
              />
            </div>
          </div>

          {/* Şifrə */}
          <div className="rg-field">
            <label className="rg-label">Şifrə</label>
            <div
              className={`rg-input-wrap ${focused === "password" ? "rg-input-wrap--pink" : ""}`}
            >
              <Lock size={16} className="rg-icon" />
              <input
                name="password"
                type={showPassword ? "text" : "password"}
                className="rg-input rg-input--pr"
                placeholder="•••••••"
                value={form.password}
                onChange={handleChange}
                onFocus={() => setFocused("password")}
                onBlur={() => setFocused("")}
              />
              <button
                type="button"
                className="rg-eye"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Checkbox */}
          <div className="rg-check-row">
            <label className="rg-check">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />
              <span className="rg-check__box" />
            </label>
            <span className="rg-check-text">
              <a href="#">İstifadəçi Gizlilik Siyasəti</a> oxudum, razıyam
            </span>
          </div>

          {/* Submit */}
          <button
            type="button"
            className="rg-btn"
            onClick={() =>
              !agreed ? alert("Şərtləri qəbul edin") : console.log(form)
            }
          >
            Daxil ol
          </button>

          <div className="rg-divider" />

          <p className="rg-footer">
            Artıq hesabınız var? <a href="#">Daxil olun</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterMain;

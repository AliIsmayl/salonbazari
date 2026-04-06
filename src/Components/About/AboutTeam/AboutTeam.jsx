import React from "react";
import "./AboutTeam.scss";
import { FiLinkedin } from "react-icons/fi";

const teamMembers = [
  {
    id: 1,
    photo:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_rp_50_assets&w=740&q=80",
    role: "UX/UI Designer",
    name: "Aynur Abdullayeva",
    desc: "Müştəri məmnuniyyəti və tərəfdaşlıq əlaqələrinin qurulması",
    linkedin: "#",
  },
  {
    id: 2,
    photo:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_rp_50_assets&w=740&q=80",
    role: "CTO",
    name: "Rza Mammadli",
    desc: "Texniki infrastruktur və sistem arxitekturasının idarə edilməsi",
    linkedin: "#",
  },
  {
    id: 3,
    photo:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_rp_50_assets&w=740&q=80",
    role: "Mobile Developer",
    name: "Nihat Aliyev",
    desc: "Mobil tətbiqlərin hazırlanması və optimallaşdırılması",
    linkedin: "#",
  },
  {
    id: 4,
    photo:
      "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_rp_50_assets&w=740&q=80",
    role: "Product Manager",
    name: "Ali İsmayil",
    desc: "Məhsulun inkişaf strategiyası və komanda koordinasiyası",
    linkedin: "#",
  },
];

function AboutTeam() {
  return (
    <section className="about-team">
      <div className="about-team__container">
        <h2 className="about-team__title">Komandamız</h2>
        <div className="about-team__grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="about-team__card">
              {/* Image + Overlay */}
              <div className="about-team__photo-wrapper">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="about-team__photo"
                />
                <div className="about-team__overlay">
                  <p className="about-team__overlay-desc">{member.desc}</p>
                  <a
                    href={member.linkedin}
                    className="about-team__linkedin"
                    aria-label={`${member.name} LinkedIn`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FiLinkedin />
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="about-team__info">
                <p className="about-team__role">{member.role}</p>
                <p className="about-team__name">{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;

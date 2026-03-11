import React from 'react'
import './AboutTeam.scss'

const teamMembers = [
  {
    id: 1,
    photo: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_rp_50_assets&w=740&q=80",
    role: 'UX/UI Designer',
    name: 'Aynur Abdullayeva',
  },
  {
    id: 2,
    photo: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_rp_50_assets&w=740&q=80",
    role: 'CTO',
    name: 'Rza Mammadli',
  },
  {
    id: 3,
    photo: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_rp_50_assets&w=740&q=80",
    role: 'Mobile Developer',
    name: 'Nihat Aliyev',
  },
  {
    id: 4,
    photo: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?semt=ais_rp_50_assets&w=740&q=80",
    role: 'Product Manager',
    name: 'Ali İsmayil',
  },
]

function AboutTeam() {
  return (
    <section className="about-team">
      <div className="about-team__container">
        <h2 className="about-team__title">Komandamız</h2>
        <div className="about-team__grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="about-team__card">
              <div className="about-team__photo-wrapper">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="about-team__photo"
                />
              </div>
              <p className="about-team__role">{member.role}</p>
              <p className="about-team__name">{member.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutTeam

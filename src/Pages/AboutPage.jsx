import React from 'react'
import AboutHeader from '../Components/About/AboutHeader/AboutHeader'
import AboutTeam from '../Components/About/AboutTeam/AboutTeam'
import Activate from '../Components/Home/Activate/Activate'

function AboutPage() {
  return (
    <div>
        <AboutHeader/>
        <Activate/>
        <AboutTeam/>
    </div>
  )
}

export default AboutPage
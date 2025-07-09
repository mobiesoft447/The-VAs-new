import React from 'react'

import { Helmet } from 'react-helmet'

import './about.css'

const About = (props) => {
  return (
    <div className="about-container1">
      <Helmet>
        <title>About - The VA's new</title>
        <meta property="og:title" content="About - The VA's new" />
      </Helmet>
      <div className="about-container2">
        <span className="about-text1">
          <span>404 Error</span>
          <br></br>
        </span>
      </div>
    </div>
  )
}

export default About

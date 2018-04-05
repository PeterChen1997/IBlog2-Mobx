import React from 'react'
import logo from '../../imgs/logo.png'
import cloud2 from '../../imgs/cloud.png'
import cloud1 from '../../imgs/cloud1.png'

const Banner = ({ title, slogan }) => {
  return (
    <section className="hero is-info is-medium">
      <div className="hero-body">
        <div className="container has-text-centered">

          <img src={cloud1} alt="cloud" id="cloud1" className="cloud"/>
          <img src={logo} alt="Logo" id="logo"/>
          <img src={cloud2} alt="cloud" id="cloud2" className="cloud"/>

          <h1 className="title">
          { title }
          </h1>
          <h2 className="subtitle">
          { slogan }
          </h2>
        </div>
      </div>
    </section>
  )
}

export default Banner

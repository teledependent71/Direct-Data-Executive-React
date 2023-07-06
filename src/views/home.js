import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Direct Data Executive</title>
        <meta property="og:title" content="Direct Data Executive" />
      </Helmet>
    </div>
  )
}

export default Home

import './App.css'
import React from 'react'

import Logo from '../components/templates/logo'
import Nav from '../components/templates/Nav'
import Main from '../components/templates/Main'
import Footer from '../components/templates/Footer'

export default props =>
    <div className="app">
        <Logo />
        <Main />
        <Nav />
        <Footer />
    </div>
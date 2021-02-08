import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'

function Layout({ children }) {
    return (
        <div className="content">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout

import React from 'react'
import '../css/style.css'
import LOGO from '../img/Logo.svg'
import P1 from  '../img/p1.jpg'
import P2 from  '../img/p2.jpg'
import P3 from  '../img/p3.jpg'
import P4 from  '../img/p4.jpg'
import P5 from  '../img/p5.jpg'
import P6 from  '../img/p6.jpg'
import P8 from  '../img/p8.jpg'
import P9 from  '../img/p9.jpg'
import P10 from  '../img/p10.jpg'
import P11 from  '../img/8.jpg'
import P12 from  '../img/p12.jpg'
import {Link} from 'react-router-dom'
export default function Homepage() {
  return (
    <div className='container'>
        <div className="homepage-container">
            <header className="header">
                <div className="btn">About</div>
                <Link to="/login" className='link'><div className="btn">Log In</div></Link>
            </header>
            <main className="main">
                <div className="main-item main-item-1">
                    <img src={P1} alt="" />
                </div>
                <div className="main-item main-item-2">
                    <img src={P2} alt="" />
                </div>
                <div className="main-item main-item-3">
                    <img src={P3} alt="" />
                </div>
                <div className="main-item main-item-4">
                    <img src={P4} alt="" />
                </div>
                <div className="main-item main-item-5">
                    <img src={P5} alt="" />
                </div>
                <div className="main-item main-item-6">
                    <img src={P6} alt="" />
                </div>
                <div className="main-item main-item-7">
                    <img src={LOGO} alt="logo" className='logo'/>
                </div>
                <div className="main-item main-item-8">
                    <img src={P8} alt="" />
                </div>
                <div className="main-item main-item-9">
                    <img src={P9} alt="" />
                </div>
                <div className="main-item main-item-10">
                    <img src={P10} alt="" />
                </div>
                <div className="main-item main-item-11">
                    <img src={P11} alt="" />
                </div>
                <div className="main-item main-item-12">
                    <img src={P12} alt="" />
                </div>
            </main>
            <footer className="footer">
                <div className="footer-card">
                    <div className="footer-card-left">
                        <div className="heading">
                            <h1 className='heading-primary'>where
                            <span className='heading-group'>
                                
                                <span className='mem'>memories connect</span>
                            </span> 
                            <span className='heading-group'>
                                and <span className='joy'>
                                <span className="joy-1">joy</span> <span className="joy-2">unfolds</span> 
                                
                                </span>
                            </span>
                             </h1>
                        </div>
                    </div>
                    <div className="footer-card-right">
                        <div className="footer-card-right-content">
                            <p className='footer-paragraph'>Step into our treasure trove, where cherished memories find eternal refuge, illuminating your journey with timeless joy that will never fade away</p>
                            <Link to='/signup' className='link'><div className="btn btn-long">Unlock The Memories</div></Link>
                            
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
  )
}

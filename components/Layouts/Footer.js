import React from 'react'
import Link from 'next/link'
import * as Icon from 'react-feather'

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="footer-area bg-f7fafd">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <div className="logo">
                                    <Link href="#">
                                        <a>
                                            <img src={require("../../images/logo.png")} alt="logo" />
                                        </a>
                                    </Link>
                                </div>
                                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget pl-5">
                                <h3>Company</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="/about">
                                            <a>About Us</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services">
                                            <a>Services</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/features">
                                            <a>Features</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/pricing">
                                            <a>Our Pricing</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/blog">
                                            <a>Latest News</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Support</h3>
                                <ul className="list">
                                    <li>
                                        <Link href="#">
                                            <a>FAQ's</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Privacy Policy</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Terms & Condition</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a>Community</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact">
                                            <a>Contact Us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Address</h3>
                                
                                <ul className="footer-contact-info">
                                    <li> 
                                        <Icon.MapPin />
                                        27 Division St, New York, NY 10002, USA
                                    </li>
                                    <li>
                                        <Icon.Mail />
                                        Email: <Link href="#"><a>startp@gmail.com</a></Link>
                                    </li>
                                    <li> 
                                        <Icon.PhoneCall />
                                        Phone: <Link href="#"><a>+ (321) 984 754</a></Link>
                                    </li>
                                </ul>
                                <ul className="social-links">
                                    <li>
                                        <Link href="#">
                                            <a className="facebook">
                                                <Icon.Facebook />
                                            </a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="twitter"><Icon.Twitter /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="instagram"><Icon.Instagram /></a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#">
                                            <a className="linkedin"><Icon.Linkedin /></a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="copyright-area">
                                <p>Copyright @2019 StartP. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>

                <img src={require("../../images/map.png")} className="map" alt="map" />
                <div className="shape1"><img src={require("../../images/shape1.png")} alt="shape" /></div>
                <div className="shape8 rotateme"><img src={require("../../images/shape2.svg")} alt="shape" /></div>
            </footer>
        )
    }
}

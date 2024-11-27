'use client'
// import 'mmenujs/style';
import Link from 'next/link';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';


export default function MobileHeader() {

    const [isMobileMenu, setMobileMenu] = useState(false);
    const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu)

    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };

    return (
        <>
            <div className="wbevent_fn_mobilemenu_wrap">
                
                {/* <!-- TOLL FREE MOBILE --> */}
                
                {/* <!-- /TOLL FREE MOBILE --> */}
                {/* <!-- LOGO & HAMBURGER --> */}
                <div className="logo_hamb">
                    <div className="in">
                        <div className="menu_logo">
                            <Link href="/"><img src="/img/WB Event Structures_Logo_RGB.png" alt="WB Events Logo" /></Link>
                        </div>
                        <div onClick={MobileMenuTrueFalse} className={!isMobileMenu ? "hamburger hamburger--collapse-r" : "hamburger hamburger--collapse-r is-active"}>
                            <div className="hamburger-box">
                                <div className="hamburger-inner"></div>
                            </div>
                        </div>
                    </div>
                </div >
                {/* <!-- /LOGO & HAMBURGER --> */}
                {/* <!-- MOBILE DROPDOWN MENU --> */}
                <div className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}>
                    <div>
                        <nav >
                            <ul className="mmenu">
                                <li><Link href="/">Home</Link></li >
                                {/* <!-- Comment out Projects --> 
                                <li><Link href="/portfolio">Projects</Link></li >*/}
                                {/* 
                                <li>
                                    <Link href="#" className={`has-arrow ${isActive.key == 2 ? "mm-active" : ""} `} onClick={() => handleToggle(2)}>Our Services</Link>
                                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                                        <li><Link href="/services/serviceSinglePage9">Worksite Solution</Link></li>
                                        <li><Link href="/services/serviceSinglePage8">Corporations</Link></li >
                                        <li><Link href="/services/serviceSinglePage7">National Sports Organizations</Link></li >
                                        <li><Link href="/services/serviceSinglePage6">Government Agencies</Link></li >
                                        <li><Link href="/services/serviceSinglePage5">Disaster Response Teams</Link></li >
                                    </ul >
                                </li >
                                */}
                             
                                {/* <li><Link href="/">Blog</Link></li > */}
                                <li><Link href="/contact">Contact</Link></li >
                            </ul >
                        </nav >
                    </div >
                </div >
                {/* <!-- /MOBILE DROPDOWN MENU --> */}
            </div >
        </>
    )
}

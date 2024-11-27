'use client'
import Link from 'next/link';
import { useState } from 'react';
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';


const background = "/img/call.png"

export default function DesktopHeader() {

    // const [isActive, setActive] = useState(false);
    // const activeTrueFalse = () => setActive(!isActive)
    // const [isSelect, setSelect] = useState("USD");

    const [isToggled, setToggled] = useState(false);
    const toggleTrueFalse = () => setToggled(!isToggled);

    const [isSelect, setSelect] = useState("ENG");


    return (
        <>
            <div className="wbevent_fn_header">

                {/* <!-- Header: Top Panel --> 
                <div className="wbevent_fn_toppanel">
                    <div className="left_panel">
                        <div className="info">
                            <Link href="tel:07787744741">(0778) 774 - 474 -1</Link>
                        </div>
                        <div className="info">
                            <Link href="mailto:email@wbevents.com">email@wbevents.com</Link>
                        </div>
                        <div className="wbevent_fn_social_list">
                            <ul>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Facebook className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Twitter className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Instagram className="fn__svg" />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" target="_blank" rel="noreferrer">
                                        <Linkedin className="fn__svg" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div >
                 <!-- /Header: Top Panel --> */}

                {/* <!-- Header: Bottom Panel --> */}
                <div className="header_inner">
                    <div className="menu_logo">
                        <Link href="/">
                            <img className="desktop_logo" src="/img/WB Event Structures_Logo_RGB.png" alt="WB Event Logo" />
                            <img className="desktop_logo_dark" src="/img/WB Event Structures_Logo_RGB (1).png" alt="WB Event Logo" />
                        </Link>
                    </div>
                    <div className="menu_nav">
                        <ul className="wbevent_fn_main_nav vert_nav">
                        <li>
                                <Link href="/">Home</Link>
                            </li >
                            {/* <!-- Header: Bottom Panel --> 
                            <li>
                                <Link href="/portfolio">Projects</Link>
                            </li >
                            */}
                            {/* 
                            <li className="menu-item-has-children">
                                <Link href="/services">Our Services</Link>
                                <ul className="sub-menu">
                                    <li><Link href="/services/serviceSinglePage9">Worksite Solution</Link></li>
                                    <li><Link href="/services/serviceSinglePage8">Corporations</Link></li >
                                    <li><Link href="/services/serviceSinglePage7">National Sports Organizations</Link></li >
                                    <li><Link href="/services/serviceSinglePage6">Government Agencies</Link></li >
                                    <li><Link href="/services/serviceSinglePage5">Disaster Response Teams</Link></li >
                                </ul >
                            </li >
                            */}
                            {/* 
                            <li>
                                <Link href="/">Blog</Link>
                            </li >
                            */}
                            <li>
                                <Link href="/contact">Contact</Link>
                            </li >
                        </ul >
                    </div >
                    <div className="toll_free_lang">
                        {/* <div className="lang_switcher">
                            <span onClick={activeTrueFalse} className="click">{isSelect}</span>
                        </div> */}
                        {/* <div className={isActive ? "wbevent_fn_moving_lang opened" : "wbevent_fn_moving_lang"} style={{ "position": "absolute", "left": "1281.16px", "top": "105.085px" }}>
                            <ul onClick={activeTrueFalse}>
                                <li onClick={() => setSelect("Eng")}><span>Eng</span></li>
                            </ul>
                        </div> */}


                        <div className="toll_free">
                            <span className="shape1"></span>
                            <span className="shape2"></span>
                            <span className="shape3"></span>
                            <div className="tf_in">
                                
                                <p><span>Inquiries:  </span> (586)-496-6363</p>
                            </div>
                        </div>

                    </div>
                </div >
                {/* <!-- /Header: Bottom Panel --> */}

            </div >
            <div className="my-class"></div>
        </>
    )
}

import Breadcumb from '@/layouts/breadcumb'
import Layout from '@/layouts/layout'
import { Location } from '@/public/svg/icon'
import Link from 'next/link'

export const metadata = {
    title: 'Contact',
}

export default function page() {
    return (
        <Layout>

            <Breadcumb firstChild={'Contact'} />
            <div className="wbevent_fn_contact">
                <div className="container">
                    <div className="contact_in">

                        <div className="map_holder">
                        <iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=16005%20Sturgeon%20Street,%20Roseville,%20MI%2048066+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                        </div>

                        <div className="contact_holder">
                            
                            
                            
                            <div className="contact_right">

                                <div className="fn_cs_location_list">
                                    <ul className="list">

                                        <li className="location_item">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <span className="icon_wrapper">
                                                        <span className="icon">
                                                            <Location className="fn__svg" />
                                                        </span>
                                                        <span className="shape"></span>
                                                    </span>
                                                    <h3>Main Office</h3>
                                                </div>
                                                <div className="content_holder">
                                                    <ul>
                                                        <li>16005 Sturgeon Street, Roseville, MI 48066</li>
                                                        <li>Phone: (586)-496-6363</li>
                                                        <li>Email: <Link href="mailto:sales@wbstructures.com">sales@wbstructures.com</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        {/* 
                                        <li className="location_item">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <span className="icon_wrapper">
                                                        <span className="icon">
                                                            <Location className="fn__svg" />
                                                        </span>
                                                        <span className="shape"></span>
                                                    </span>
                                                    <h3>New-York Office</h3>
                                                </div>
                                                <div className="content_holder">
                                                    <ul>
                                                        <li>110-115 Ft.Consort NE, New-York, DC 20031</li>
                                                        <li>Phone: +1 272-436-4524</li>
                                                        <li>Email: <Link href="mailto:wbevent@gmail.com">w.wbevent@gmail.com</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        */}
                                        {/* 
                                        <li className="location_item">
                                            <div className="item">
                                                <div className="title_holder">
                                                    <span className="icon_wrapper">
                                                        <span className="icon">
                                                            <Location className="fn__svg" />
                                                        </span>
                                                        <span className="shape"></span>
                                                    </span>
                                                    <h3>Boston Office</h3>
                                                </div>
                                                <div className="content_holder">
                                                    <ul>
                                                        <li>100-120 Ft.Albemarle NE, Boston, DC 20017</li>
                                                        <li>Phone: +1 252-925-7564</li>
                                                        <li>Email: <Link href="mailto:wbevent@gmail.com">w.wbevent@gmail.com</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </li>
                                        */}

                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

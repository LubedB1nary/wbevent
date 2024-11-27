import { Certificate, Checked, Stars } from "@/public/svg/icon";
import Link from "next/link";

const rightImage = "/img/service/client_rating.png"

export default function HomeWhyChooseUs() {
    return (
        <>
            <div className="service_section">

                {/* <!-- About with Rating Shortcode --> */}
                <div className="fn_cs_about_with_rating">
                    <div className="container">
                        <div className="awr_inner">
                            <div className="left_part">
                                <div className="title_holder">
                                    <h3>Why choose our services?</h3>
                                    <p>WB Event Structures delivers unrivaled expertise in temporary structure solutions, backed by over two decades of industry experience. Our structures are American made and German engineered, combining domestic craftsmanship with world-class engineering. Our innovative approach and unwavering commitment to excellence ensure that every project, from concept to completion, exceeds expectations.</p> <p>We offer end-to-end solutions, seamlessly integrating design, engineering, and rapid deployment of large-scale tents with custom amenities. Our structures can be installed and executed within a 24-hour period, ensuring your event is ready on time. Our in-house team manages every detail, providing turnkey structures that transform spaces for any event or application, guaranteeing efficiency, quality, and peace of mind for our diverse clientele.</p> <p>Committed to the highest industry standards, we are proud members of the Better Business Bureau (BBB), the American Rental Association (ARA), and the Mid-Atlantic Tent Renters Association (MATRA). Our team is OSHA 30 Certified, ensuring safety and professionalism in every project.</p>                                
                                </div>
                                {/* 
                                <div className="signature">
                                    <Certificate className="fn__svg" />
                                    <p>We have a<br />insert Certificate name here.</p>
                                </div>
                                */}
                            </div>
                            <div className="right_part">
                                <div className="r_inner">
                                    <div className="top_section">
                                        <div className="badge_holder">
                                            <div className="badge_left">
                                                <div className="b_title">
                                                    <h3>World&apos;s Leading Industry<br />Corporation</h3>
                                                </div>
                                                <div className="b_desc"><span className="year">20</span><span className="text">Years of Experience</span></div>
                                            </div>
                                            <div className="badge_right" style={{ "backgroundImage": `url(${rightImage})` }}></div>
                                        </div>
                                        <div className="rating_holder">
                                            <div className="r_header"></div>
                                            <div className="r_footer"></div>
                                            <Link href="#"></Link>
                                            <Stars className="fn__svg" />
                                            <h3 className="rating_number">9.7</h3>
                                            <h3 className="rating_text">Customer Rating</h3>
                                        </div>
                                    </div>
                                    <div className="bottom_section">
                                        <div className="list">
                                            <ul>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>BBB Registered.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>ARA Members</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>OSHA 30 Certified</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>Matra members</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="item">
                                                        <span className="icon">
                                                            <Checked className="fn__svg" />
                                                        </span>
                                                        <p>24-hr turnaround available</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /About with Rating Shortcode --> */}

            </div>
        </>
    )
}

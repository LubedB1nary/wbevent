import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";

const portfolio1 = "/img/portfolio/projects_worksite_solutions.png"
const portfolio2 = "/img/portfolio/projects_corporate.png"
const portfolio3 = "/img/portfolio/projects_national_sports.png"
const portfolio4 = "/img/portfolio/projects_government_agencies.png"
const portfolio5 = "/img/portfolio/projects_disaster_relief.png"

export default function HomeProject() {
    return (
        <>
            <div className="fn_cs_project_sticky_full">
                <div className="inner">
                    <div className="left_part">
                    <div className="fn_cs_sticky_section">
                        <h3>Our Projects</h3>
                        <p>At WB Event Structures, we don't just raise tents; we elevate experiences. Our foundation is built on the unshakeable pillars of innovation, reliability, and the pursuit of excellence—values that have shaped our journey from a bold vision shared by two brothers to an industry-leading force in event solutions.</p>
                        <p>We are the architects of possibility, offering a comprehensive suite of temporary structure solutions that transform empty spaces into extraordinary environments. Our services include engineered flooring solutions, overhead rollup bay doors and door systems, advanced HVAC solutions, warehouse lighting, and hard side wall options in solid or glass. From the largest sports arenas to the most remote disaster relief zones, our expertise spans continents and contexts, always delivering with precision and passion.</p> 
                        <p>What sets us apart? It's our unique blend of engineering prowess and event industry insight, all under one roof. We offer a wide range of tent widths to suit any event or application, available in <em>3m, 6m, 9m, 12m, 15m, 20m, 25m, 30m, and 40m </em> sizes.</p>
                        <Link href="/">Explore Our Structures</Link>
                    </div>
                    </div>
                    <div className="right_part">
                        <div className="fn_cs_sticky_section">
                            <ul>
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <img src="/img/thumb/700-500.jpg" alt="" />
                                            <div className="abs_img" style={{ "backgroundImage": `url(${portfolio1})` }}></div>
                                            <Link href="/"></Link>
                                        </div>
                                        <div className="title_holder">
                                            <h3><Link href="/">Worksite Solutions</Link></h3>
                                            <span className="desc">Transform your worksite with our rapid-deploy, engineered structure tents, designed to withstand the toughest industrial environments. Our customizable solutions ensure efficiency and comfort, turning challenging work areas into productive, sheltered spaces.</span>
                                            <p>
                                                <Link href="/">
                                                    <span className="text">More Details</span>
                                                    <span className="arrow">
                                                        <Arrow_r className="fn__svg" />
                                                    </span>
                                                </Link>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <img src="/img/thumb/700-500.jpg" alt="" />
                                            <div className="abs_img" style={{ "backgroundImage": `url(${portfolio2})` }}></div>
                                            <Link href="/"></Link>
                                        </div>
                                        <div className="title_holder">
                                            <h3><Link href="/">Corporate Events</Link></h3>
                                            <span className="desc">Elevate your corporate events with our sophisticated, large-scale tent solutions that reflect your brand's prestige. From product launches to company picnics, we create impressive spaces that leave a lasting impression on your clients and employees alike.</span>
                                            <p>
                                                <Link href="/">
                                                    <span className="text">More Details</span>
                                                    <span className="arrow">
                                                        <Arrow_r className="fn__svg" />
                                                    </span>
                                                </Link>
                                            </p>
                                        </div >
                                    </div >
                                </li >
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <img src="/img/thumb/700-500.jpg" alt="" />
                                            <div className="abs_img" style={{ "backgroundImage": `url(${portfolio3})` }}></div>
                                            <Link href="/"></Link>
                                        </div>
                                        <div className="title_holder">
                                            <h3><Link href="/">National Sports Organizations</Link></h3>
                                            <span className="desc">Score big with our versatile, high-quality event structures designed to enhance any sporting event or fan experience. Our tents offer the perfect blend of functionality and atmosphere for tournaments, fan zones, and athletic showcases, ensuring your event is a winner from start to finish.</span>
                                            <p>
                                                <Link href="/">
                                                    <span className="text">More Details</span>
                                                    <span className="arrow">
                                                        <Arrow_r className="fn__svg" />
                                                    </span>
                                                </Link>
                                            </p>
                                        </div >
                                    </div >
                                </li >
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <img src="/img/thumb/700-500.jpg" alt="" />
                                            <div className="abs_img" style={{ "backgroundImage": `url(${portfolio4})` }}></div>
                                            <Link href="/"></Link>
                                        </div>
                                        <div className="title_holder">
                                            <h3><Link href="/">Government Agencies</Link></h3>
                                            <span className="desc">Secure, efficient temporary structures for critical government and border operations, deployed rapidly in any location. Our engineered tents provide reliable spaces for administrative work, processing, and secure storage, meeting the unique challenges of governmental agencies with precision and care.</span>
                                            <p>
                                                <Link href="/">
                                                    <span className="text">More Details</span>
                                                    <span className="arrow">
                                                        <Arrow_r className="fn__svg" />
                                                    </span>
                                                </Link>
                                            </p>
                                        </div >
                                    </div >
                                </li >
                                <li>
                                    <div className="item">
                                        <div className="img_holder">
                                            <img src="/img/thumb/700-500.jpg" alt="" />
                                            <div className="abs_img" style={{ "backgroundImage": `url(${portfolio5})` }}></div>
                                            <Link href="/"></Link>
                                        </div>
                                        <div className="title_holder">
                                            <h3><Link href="/">Disaster Response Teams</Link></h3>
                                            <span className="desc">When every second counts, our immediate, reliable shelter solutions ensure swift and effective disaster relief efforts. Our rapid-deploy structures create safe, comfortable spaces for emergency services, temporary housing, and aid distribution, standing strong in the face of crisis to support those who need it most.</span>
                                            <p>
                                                <Link href="/">
                                                    <span className="text">More Details</span>
                                                    <span className="arrow">
                                                        <Arrow_r className="fn__svg" />
                                                    </span>
                                                </Link>
                                            </p>
                                        </div >
                                    </div >
                                </li >
                            </ul >
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}

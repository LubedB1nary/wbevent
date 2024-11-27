import { Arrow_r } from "@/public/svg/icon";
import Link from "next/link";

export default function HomePrinciples() {
    return (
        <>
            <div className="fn_cs_principles_modern">
                <div className="container">
                    <div className="inner">
                        <div className="shape"><span className="shape1"></span><span className="shape2"></span></div>
                        <ul className="fn_cs_miniboxes">
                            <li>
                                <div className="item">
                                    <div className="title_holder">
                                        <Link href="/"></Link>
                                        <h3>Swift Solutions</h3>
                                        <p>We provide rapid deployment of high-quality temporary structures to meet your immediate needs.</p>
                                        <span className="icon">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                    <div className="number_holder">01</div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="title_holder">
                                        <Link href="/"></Link>
                                        <h3>Versatile Inventory</h3>
                                        <p>Our diverse range of tent sizes and styles ensures the perfect fit for any event or application.</p>
                                        <span className="icon">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                    <div className="number_holder">02</div>
                                </div>
                            </li>
                            <li>
                                <div className="item">
                                    <div className="title_holder">
                                        <Link href="/"></Link>
                                        <h3>Hassle-Free</h3>
                                        <p>From selection to setup and takedown, we manage every detail for a smooth, worry-free rental process.</p>
                                        <span className="icon">
                                            <Arrow_r className="fn__svg" />
                                        </span>
                                    </div>
                                    <div className="number_holder">03</div>
                                </div>
                            </li>
                        </ul >
                    </div >
                </div >
            </div >
        </>
    )
}

'use client'
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

// register Swiper custom elements
register();


// Images imported
const slider1 = "/img/slider/slider_1.jpg"
const slider2 = "/img/slider/slider_2.jpg"
const slider3 = "/img/slider/slider_3.jpg"
const slider4 = "/img/slider/slider_4.png"
const slider5 = "/img/slider/slider_5.png"


export default function HomeSlider() {
    return (
        <>
            <div className="wbevent_slider_alpha" data-desc-show="yes" data-category-show="yes" data-nav-types="square" data-autoplay-switch="enabled" data-autoplay-time="8000" data-effect="cards" data-progress="enabled" data-box-pos="cr" data-img-effect="enabled" data-text-effect="enabled">

                {/* <!-- Alpha Slider: navigation --> */}
                <div className="owl_control">
                    <div className="fn_prev"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                    <div className="fn_next"><span><span className="a"></span><span className="b"></span><span className="c"></span></span></div>
                </div>
                {/* <!-- /Alpha Slider: navigation --> */}

                {/* <!-- Alpha Slider: pagination --> */}
                <div className="swiper-pagination"></div>
                {/* <!-- /Alpha Slider: pagination --> */}

                {/* <!-- Alpha Slider: wrapper --> */}
                <Swiper
                    spaceBetween={2}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                        prevEl: ".fn_prev",
                        nextEl: ".fn_next",
                    }}
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                    }}
                    className="custom-class"
                >


                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider1})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Industry</span></p>
                                        <h3><span>Worksite Solutions</span></h3>
                                        <div className="desc"><span>Transform your worksite with our rapid-deploy, engineered structure tents. Our durable, customizable solutions ensure efficiency and comfort in any industrial environment.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider2})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Industry</span></p>
                                        <h3><span>Corporations</span></h3>
                                        <div className="desc"><span>Elevate your corporate events with our customizable, large-scale tent solutions. From product launches to company picnics, we provide sophisticated spaces that reflect your brand's prestige.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider3})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Industry</span></p>
                                        <h3><span>National Sports Organizations</span></h3>
                                        <div className="desc"><span>Create unforgettable sporting experiences with our versatile, high-quality event structures. Our tents offer the perfect blend of functionality and atmosphere for tournaments, fan zones, and athletic showcases."</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider4})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Industry</span></p>
                                        <h3><span>Government Agencies</span></h3>
                                        <div className="desc"><span>Secure, efficient temporary structures for critical government and border operations. Our engineered tents provide reliable, quickly-deployed spaces for administrative work, processing, and secure storage in any location.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="item">
                            <div className="img_holder" style={{ "backgroundImage": `url(${slider5})` }}></div>
                            <div className="title_holder">
                                <div className="inner">
                                    <div className="in">
                                        <p><span>Industry</span></p>
                                        <h3><span>Disaster Response Teams</span></h3>
                                        <div className="desc"><span>Immediate, reliable shelter solutions for swift disaster relief efforts. Our rapid-deploy structures create safe, comfortable spaces for emergency services, temporary housing, and aid distribution in crisis situations.</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>

                {/* <!-- Alpha Slider: wrapper --> */}

            </div>
            {/* <!-- /Alpha Slider --> */}
        </>
    )
}


export default function HomeAbout() {
    return (
        <>
            <div className="about_section">

                {/* <!-- About Shortcode --> */}
                <div className="fn_cs_about">
                    <div className="container">
                        <div className="a_inner">
                            <div className="leftpart">
                                <div className="title_holder">
                                    <h3 className="title">We are WB Events</h3>
                                    <p>WB Event Structures is a leading provider of temporary structure rentals, specializing in large, engineered tents for diverse applications. Founded by two brothers with over 20 years of combined industry experience, we offer innovative solutions for worksite needs, corporate events, sports organizations, government agencies, and disaster response teams across the nation.</p>
                                    <p>Our mission is to deliver premium temporary spaces that transform any environment, combining cutting-edge technology with unparalleled service. From concept to completion, we ensure every structure meets the highest standards of quality, safety, and client satisfaction..</p>
                                </div>
                                {/* 
                                <div className="sign_holder">
                                    <h3 className="name">Bryan Something</h3>
                                    <p className="occ">Chief Executive</p>
                                </div>
                                */}
                            </div>
                            <div className="rightpart">
                                <div className="r_inner" id="scene" style={{ "transform": "translate3d(0px, 0px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
                                    <div className="layer border" data-depth="0.3" style={{ "position": "relative", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(21.2782px, -19.0075px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
                                        <span className="span1"></span>
                                        <span className="span2"></span>
                                        <img src="img/thumb/500-560.jpg" alt="" />
                                    </div>
                                    <div className="img_holder layer" data-depth="0.5" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "transform": "translate3d(35.4636px, -31.6792px, 0px)" }}>
                                        <img src="img/thumb/500-560.jpg" alt="" />
                                        <div className="abs_img" data-bg-img="img/about/right.jpg" style={{ "backgroundImage": "url(img/about/about_right.png)" }}></div>
                                    </div>
                                    <div className="dots layer" data-switch="disable" data-depth="0.9" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(63.8345px, -57.0226px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
                                        <img src="img/thumb/500-560.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /About Shortcode --> */}

            </div>
        </>
    )
}

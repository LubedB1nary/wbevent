import { Quotes } from "@/public/svg/icon";

const testimonial = "/img/testimonial/bg_testimonial.png"

export default function HomeTetimonial() {
    return (
        <>
            <div className="testimonial_section" style={{ "backgroundImage": `url(${testimonial})` }}>

                <div className="overlay"></div>

                {/* <!-- Single Testimonial Shortcode --> */}
                <div className="fn_cs_single_testimonial">
                    <div className="container">
                        <div className="inner">
                            <Quotes className="fn__svg" />
                            <div className="content_holder">
                                <p>WB Event Structures exceeded our expectations in every way. Their rapid deployment and professional setup of our corporate event space was impressive, and the quality of their tents and amenities elevated our entire conference. The team's expertise and attention to detail made the process seamless from start to finish. We couldn't have asked for a better partner for our event needs.</p>
                                <h3>Sarah T.</h3>
                                <h5>Event Coordinator</h5>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- /Single Testimonial Shortcode --> */}

            </div>
        </>
    )
}

import Link from 'next/link'
import React from 'react'

export default function HomeCTA() {
    return (
        <>
            <div className="fn_cs_call_to_action">
                <div className="container">
                    <div className="cta_holder">
                        <div className="title_holder">
                            <h3>Elevating Spaces, Exceeding Expectations</h3>
                            <p>Transform your space with our premium temporary structures.</p>
                        </div>
                        <div className="link_holder">
                            <Link href="/contact">Get in Touch</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

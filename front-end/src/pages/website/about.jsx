import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}

        >
            <div class="container">
                <section
                    className="breadcrumb-section set-bg"
                    data-setbg="img/breadcrumb-bg.jpg"
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="bs-text">
                                    <h2>About us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div class="section section-padding pb-0 " style={{ color: "black", textAlign: "left", marginTop: "100px" }}>
                    <div class="">
                        <div class="row learts-mb-n30">

                            <div class="col-md-6 col-12 align-self-center learts-mb-30 ">
                                <div class="about-us3">
                                    <h2 class="title" >Who Are We?</h2>
                                    <div class="desc">
                                        <p class="">Hundreds of video games get released every year, and there's not enough time to play them all. How are you supposed to know which games are worth your time? Video game news and reviews sites are a good way to keep up with what's happening in the gaming world and see if the latest releases are worth buying.We've picked out the best game review and video game news on the internet to help with this. Whether you want to check on a game's quality before buying it, or just want to browse the latest gaming headlines, one of these great game websites will serve you well.</p>
                                    </div>

                                </div>
                            </div>
                            <div class="col-md-6 col-12 text-center learts-mb-30 ">
                                <img src="https://th.bing.com/th/id/R.3e9b24cc648f1b17722aa733be4ec950?rik=WlFb827KXIEd5w&pid=ImgRaw&r=0" alt="" class="img-fluid" />
                            </div>

                        </div>
                    </div>

                </div>
                <br />
                <br />
                <br />

                <div class="section section-padding pb-0 mt5 mb-5" >
                    <div class="">
                        <div class="row learts-mb-n30">
                            <div class=" col-md-6 col-12 align-self-center learts-mb-30" >
                                <img src="https://th.bing.com/th/id/OIP.NtNCYh-UUdfkqfki1cyZhQHaD4?pid=ImgDet&rs=1" alt="" class="img-fluid" />
                            </div>
                            <div class="col-md-6 col-12 text-center learts-mb-30" >
                                <div class="about-us3" style={{ color: "black", textAlign: "left", marginTop: "100px" }}>

                                    <h2 class="title" >Mission</h2>
                                    <div class="desc">
                                        <p>Gaming is an industry that grows fast, with new exciting games, more advanced graphics, and richer storylines produced every day. And as games improve, so does gaming website design. The internet is full of stunning game website examples and countless gaming website ideas that are worth exploring.A gaming website is a great medium to promote a video game, create an online space that unites gamers, or share industry news. we toke care about Gaming website UI design because we believed is one of the key factors determining the user’s experience. And the latter should be nothing but fantastic if you want to have a successful site.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </motion.div>
    )
}

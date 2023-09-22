import React from 'react'
import './About.pg.css'
import FAQ from '../../components/sections/FAQ';
import Details from '../../components/sections/Details';
import { Helmet } from 'react-helmet-async';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>About - Project-Babel</title>
            </Helmet>
            <section id="about" class="about my-2">
                <Details />
            </section>
            <br />
            <section id="faq" class="faq section-bg">
                <FAQ />
            </section>
        </div>
    )
}

export default About;
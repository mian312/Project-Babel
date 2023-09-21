import React from 'react'
import './About.pg.css'
import FAQ from '../../components/sections/FAQ';
import Details from '../../components/sections/Details';

const About = () => {
    return (
        <div>
            <section id="about" class="about">
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
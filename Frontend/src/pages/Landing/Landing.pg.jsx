import React from 'react'
import './Landing.pg.css'
import { Link, useNavigate } from 'react-router-dom'
import Steps from '../../components/sections/Steps';
import Team from '../../components/sections/Team';
import { Helmet } from 'react-helmet-async';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Helmet>
                <title>Welcome to Project-Babel</title>
            </Helmet>
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="container text-center text-md-left" data-aos="fade-up">
                    <h1>Welcome to Project-Babel</h1>
                    <h2>A one stop for University/College projects</h2>
                    <Link to={'/home'} class="btn-get-started scrollto">Get Started</Link>
                </div>
            </section>
            <section id="steps" className="steps section-bg">
                <h2 className='text-center'>Benefits</h2>
                <Steps />
            </section>
            <section id="team" class="team">
                <div class="container">
                    <div class="section-title" data-aos="fade-up">
                        <h2 className='text-center'>Team</h2>
                        <p>It takes great pains to benefit. His needs result from something that actually drives him away. Let them be
                            He wants to be followed. Anyone whom anyone desires. And no one who hinders receives the others. Because let him flee
                            in these offices, indeed, which are useful here.</p>
                    </div>
                    <Team />
                </div>
            </section>
        </div>
    )
}

export default Landing
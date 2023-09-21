import React from 'react'
import './Landing.pg.css'
import { Link, useNavigate } from 'react-router-dom'
import Steps from '../../components/sections/Steps';
import Team from '../../components/sections/Team';

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div>
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
                        <h2>Team</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
                            consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
                            in iste officiis commodi quidem hic quas.</p>
                    </div>
                    <Team />
                </div>
            </section>
        </div>
    )
}

export default Landing
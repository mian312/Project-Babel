import React from 'react';

const FAQ = () => (
    <div className="container">
        <div className="section-title" data-aos="fade-up">
            <h2 className='text-center'>F.A.Q</h2>
            <p>It takes great pains to benefit. His needs result from something that actually drives him away. Let them be what they want. Anyone whom anyone desires. And no one who hinders receives the others. Because he should flee in this office of convenience, which is here.</p>
        </div>

        <div className="faq-list">
            <ul>
                <li data-aos="fade-up">
                    <a data-bs-toggle="collapse" className="collapse"
                        data-bs-target="#faq-list-1">What is Project-Babel? <i
                            className="bi bi-caret-down icon-show"></i><i className="bi bi-caret-up icon-close"></i></a>
                    <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                        <p>
                            Project-Babel is an online platform that connects university projects from all over the world. We believe that university projects are a breeding ground for innovation and creativity, and that they have the potential to make a real difference in the world. That's why we've made it our mission to connect students, researchers, and innovators with the resources they need to bring their projects to life.
                        </p>
                    </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="100">
                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-2"
                        className="collapsed">How does Project-Babel work? <i
                            className="bi bi-caret-down icon-show"></i><i className="bi bi-caret-up icon-close"></i></a>
                    <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                        <p>
                            To get started, simply create a profile and start browsing projects. You can browse projects by institution, discipline, or keyword. You can also filter projects by stage of development, funding status, and more. If you find a project that you're interested in, you can contact the project team directly.
                        </p>
                    </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="200">
                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-3"
                        className="collapsed">How can I submit my own project to Project-Babel? <i
                            className="bi bi-caret-down icon-show"></i><i className="bi bi-caret-up icon-close"></i></a>
                    <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                        <p>
                            To submit your own project, simply create a profile and click on the "Submit Project" button. You'll be asked to provide information about your project, such as the title, description, discipline, and stage of development. You can also upload images and videos of your project.
                        </p>
                    </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="300">
                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-4"
                        className="collapsed">What are the benefits of submitting my project to Project-Babel? <i
                            className="bi bi-caret-down icon-show"></i><i className="bi bi-caret-up icon-close"></i></a>
                    <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                        <p>
                            By submitting your project to Project-Babel, you'll be able to reach a global audience of potential collaborators, funders, and supporters. You'll also be able to get feedback on your project from other experts in your field.
                        </p>
                    </div>
                </li>

                <li data-aos="fade-up" data-aos-delay="400">
                    <a data-bs-toggle="collapse" data-bs-target="#faq-list-5"
                        className="collapsed">Is Project-Babel free to use? <i
                            className="bi bi-caret-down icon-show"></i><i className="bi bi-caret-up icon-close"></i></a>
                    <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                        <p>
                            Yes, Project-Babel is free to use for both students and professionals.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
);

export default FAQ;

// About.jsx
// This page introduces my background, experience, and career interests.

function About() {
    return (
        <main className="about-page">

            <section className="about-section">

                <div className="about-image">
                    <img
                        src="/images/my_photo.jpg"
                        alt="Ting-Yang Chou"
                    />
                </div>

                <div className="about-content">

                    <p className="section-label">
                        GET TO KNOW ME
                    </p>

                    <h1>About Me</h1>

                    <p>
                        I'm Ting-Yang Chou, an AI Software Technology
                        student at Centennial College in Toronto.
                    </p>

                    <p>
                        Before entering the software field, I studied
                        Vehicle Engineering and gained professional
                        experience in the manufacturing industry.
                        This background helped me develop strong
                        analytical thinking, technical problem-solving,
                        teamwork, and attention to detail.
                    </p>

                    <p>
                        I am now applying these skills to software
                        development and artificial intelligence.
                        I enjoy learning technologies such as Python,
                        Java, JavaScript, React, databases, and
                        machine learning.
                    </p>

                    <p>
                        I am interested in opportunities where I can
                        continue learning, contribute to real projects,
                        and develop practical software solutions.
                    </p>

                    <a
                        href="/TingYangChou_Resume.pdf"
                        className="primary-button"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View My Resume
                    </a>

                </div>

            </section>

        </main>
    );
}

export default About;
// Home.jsx
// This component displays the welcome section and mission statement
// for my personal portfolio website.

function Home() {
    return (
        <main className="home-page">

            <section className="hero-section">

                <p className="hero-intro">
                    Hello, my name is
                </p>

                <h1>
                    Ting-Yang Chou
                </h1>

                <h2>
                    AI Software Technology Co-op Student
                </h2>

                <p className="hero-description">
                    I enjoy combining software development, artificial
                    intelligence, and analytical problem-solving to create
                    practical solutions for real-world challenges.
                </p>

                <div className="hero-buttons">
                    <a href="/projects" className="primary-button">
                        View My Projects
                    </a>

                    <a href="/about" className="secondary-button">
                        About Me
                    </a>
                </div>

            </section>

            <section className="mission-section">

                <h2>My Mission</h2>

                <p>
                    My goal is to continue developing my technical skills
                    while creating reliable, practical, and user-friendly
                    software solutions. I am especially interested in
                    combining software development with artificial
                    intelligence to solve meaningful problems.
                </p>

            </section>

        </main>
    );
}

export default Home;
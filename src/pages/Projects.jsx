// Projects.jsx
// This page highlights selected software and AI projects.

import ProjectCard from "../components/ProjectCard";

function Projects() {

    const projects = [
        {
            id: 1,

            title: "California House Price Predictor",

            image: "/images/house-price-project.png",

            description:
                "A machine learning application designed to predict California housing prices using structured housing data.",

            role:
                "I worked on data preprocessing, model training, evaluation, and prediction components.",

            outcome:
                "The project created a reusable machine learning workflow that can process housing data and generate price predictions.",

            technologies:
                "Python, Pandas, Scikit-learn, Machine Learning"
        },

        {
            id: 2,

            title: "MyDay Task Manager",

            image: "/images/task-manager-project.png",

            description:
                "A productivity-focused application designed to help users organize daily tasks and manage priorities.",

            role:
                "I worked on the application structure, user interface, and task management features.",

            outcome:
                "The project provides a simple and organized way for users to manage daily activities.",

            technologies:
                "React, JavaScript, HTML, CSS"
        },

        {
            id: 3,

            title: "AI Parking Smart System",

            image: "/images/parking-project.png",

            description:
                "A collaborative project exploring how intelligent technology can improve parking management and help users identify available parking spaces.",

            role:
                "I contributed to system planning, problem analysis, and the development of project ideas with my team.",

            outcome:
                "The project demonstrated how software and AI concepts can be applied to a practical transportation problem.",

            technologies:
                "AI Concepts, Software Design, System Analysis, Team Collaboration"
        }
    ];

    return (
        <main className="projects-page">

            {/* =========================
                PROJECTS HEADER
            ========================== */}
            <section className="projects-header">

                <p className="section-label">
                    MY WORK
                </p>

                <h1>
                    Projects
                </h1>

                <p>
                    Here are some projects that demonstrate my experience
                    in software development, artificial intelligence,
                    and problem-solving.
                </p>

            </section>


            {/* =========================
                PROJECT CARDS
            ========================== */}
            <section className="projects-grid">

                {projects.map((project) => (

                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        role={project.role}
                        outcome={project.outcome}
                        technologies={project.technologies}
                    />

                ))}

            </section>

        </main>
    );
}

export default Projects;
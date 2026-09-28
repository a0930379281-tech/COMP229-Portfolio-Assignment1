// ProjectCard.jsx
// Reusable component for displaying project information.

function ProjectCard({ image, title, description, role, outcome, technologies }) {
    return (
        <article className="project-card">

            <img
                src={image}
                alt={`${title} project`}
                className="project-image"
            />

            <div className="project-content">

                <h2>{title}</h2>

                <p>{description}</p>

                <p>
                    <strong>My Role:</strong> {role}
                </p>

                <p>
                    <strong>Outcome:</strong> {outcome}
                </p>

                <p className="project-technologies">
                    <strong>Technologies:</strong> {technologies}
                </p>

            </div>

        </article>
    );
}

export default ProjectCard;
// Services.jsx
// This page presents technical services based on my current skills.

function Services() {

    const services = [
        {
            id: 1,
            title: "Web Development",
            description:
                "Creating responsive and user-friendly web applications using React, JavaScript, HTML, and CSS."
        },

        {
            id: 2,
            title: "Software Development",
            description:
                "Developing structured applications using Python and Java with object-oriented programming principles."
        },

        {
            id: 3,
            title: "Data & AI Solutions",
            description:
                "Working with data preprocessing, analysis, and machine learning using Python, Pandas, and Scikit-learn."
        }
    ];

    return (
        <main className="services-page">

            <section className="services-header">

                <p className="section-label">
                    WHAT I DO
                </p>

                <h1>Services</h1>

                <p>
                    I am developing practical skills across software,
                    web development, data, and artificial intelligence.
                </p>

            </section>

            <section className="services-grid">

                {services.map((service) => (

                    <article
                        className="service-card"
                        key={service.id}
                    >

                        <h2>{service.title}</h2>

                        <p>
                            {service.description}
                        </p>

                    </article>

                ))}

            </section>

        </main>
    );
}

export default Services;
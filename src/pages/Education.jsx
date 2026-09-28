// Education.jsx
// This page presents my educational background and qualifications.

function Education() {
    return (
        <main className="education-page">

            <section className="education-header">

                <p className="section-label">
                    MY BACKGROUND
                </p>

                <h1>Education</h1>

                <p>
                    My education combines engineering, software development,
                    and artificial intelligence.
                </p>

            </section>

            <section className="education-list">

                <article className="education-card">

                    <h2>Centennial College</h2>

                    <h3>
                        Graduate Certificate – AI Software Technology
                    </h3>

                    <p>
                        Toronto, Ontario, Canada
                    </p>

                    <p>
                        <strong>2026 – Present</strong>
                    </p>

                    <p>
                        Areas of study include software development,
                        web application development, artificial intelligence,
                        databases, object-oriented programming, data analysis,
                        and software architecture.
                    </p>

                </article>

                <article className="education-card">

                    <h2>National Formosa University</h2>

                    <h3>
                        Bachelor's Degree – Vehicle Engineering
                    </h3>

                    <p>
                        Taiwan
                    </p>

                    <p>
                        <strong>2010 – 2015</strong>
                    </p>

                    <p>
                        Studied vehicle engineering, mechanical systems,
                        manufacturing processes, and engineering analysis.
                    </p>

                </article>

            </section>

        </main>
    );
}

export default Education;
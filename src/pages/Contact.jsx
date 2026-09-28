// Contact.jsx
// This page provides a contact form for visitors.
// The form captures user information and redirects to the Home page after submission.

import { useState } from "react";
import { useNavigate } from "react-router";

function Contact() {
    const navigate = useNavigate();

    // Stores the information entered by the user
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: ""
    });

    // Updates form data whenever the user types in an input field
    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handles form submission
    const handleSubmit = (event) => {
        event.preventDefault();

        console.log("Contact Form Data:", formData);

        alert("Thank you for your message!");

        // Redirect the user to the Home page
        navigate("/");
    };

    return (
        <main className="contact-page">

            <section className="contact-header">
                <p className="section-label">LET'S CONNECT</p>

                <h1>Contact Me</h1>

                <p>
                    If you would like to discuss a project, opportunity,
                    or collaboration, feel free to send me a message.
                </p>
            </section>

            <section className="contact-container">

                <div className="contact-information">

                    <h2>Contact Information</h2>

                    <p>
                        <strong>Name:</strong> Ting-Yang Chou
                    </p>

                    <p>
                        <strong>Location:</strong> Toronto, Ontario, Canada
                    </p>

                    <p>
                        <strong>Email:</strong> tchou3@my.centennialcollege.ca
                    </p>

                </div>

                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    <div className="form-group">
                        <label htmlFor="firstName">
                            First Name
                        </label>

                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="lastName">
                            Last Name
                        </label>

                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">
                            Contact Number
                        </label>

                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">
                            Email Address
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            name="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="primary-button"
                    >
                        Send Message
                    </button>

                </form>

            </section>

        </main>
    );
}

export default Contact;
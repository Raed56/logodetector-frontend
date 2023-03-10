import React from "react";

function Contact() {
    return (
        <div>
            <header>
                <h1>Contact Us</h1>
            </header>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
            <main>
                <p>Fill out the form below to get in touch:</p>
                <form>
                    <label>
                        Name:
                        <input type="text" />
                    </label>
                    <label>
                        Email:
                        <input type="email" />
                    </label>
                    <label>
                        Message:
                        <textarea />
                    </label>
                    <button type="submit">Send</button>
                </form>
            </main>
            <footer>
                <p>© My Website</p>
            </footer>
        </div>
    );
}

export default Contact;

import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Home.css";

function Home() {
    const [url, setUrl] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        // do something with the URL
        console.log(url);
    };

    const handleUrlChange = (event) => {
        setUrl(event.target.value);
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>USF Logo Detector</h1>
            </header>
            <nav className="App-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <main className="App-main">
                <form onSubmit={handleSubmit}>
                    <label>
                        URL:
                        <input
                            type="text"
                            value={url}
                            onChange={handleUrlChange}
                        />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </main>
            <footer className="App-footer">
                <p>© Built by Raed, Mateus, Mohammed, Vincent</p>
            </footer>
        </div>
    );
}

function Contact() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Contact Us</h1>
            </header>
            <nav className="App-nav">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
            <main className="App-main">
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
            <footer className="App-footer">
                <p>© Built by Raed, Mateus, Mohammed, Vincent</p>
            </footer>
        </div>
    );
}

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;

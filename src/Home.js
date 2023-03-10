import React, { useState } from "react";
import {
    FormContainer,
    Input,
    URL,
    URLContainer,
    Button,
    Container,
    Navbar,
    Logo,
    ContactContainer,
    ContactTitle,
    ContactText,
    ContactLink,
    InputContainer,
    URLTitle,
} from "./Home.styled";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Home = () => {
    const [url, setUrl] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault;
    };

    const handleChange = (event) => {
        setUrl(event.target.value);
    };

    return (
        <Router>
            <Container>
                <Navbar>
                    <Logo to="/">My Website</Logo>
                    <ContactLink to="/contact">Contact Us</ContactLink>
                </Navbar>
                <Switch>
                    <Route exact path="/">
                        <FormContainer>
                            <form onSubmit={handleSubmit}>
                                <InputContainer>
                                    <Input
                                        type="text"
                                        placeholder="Enter URL"
                                        value={url}
                                        onChange={handleChange}
                                    />
                                    <Button type="submit">Submit</Button>
                                </InputContainer>
                            </form>
                            {url && (
                                <URLContainer>
                                    <URLTitle>Entered URL:</URLTitle>
                                    <URL>{url}</URL>
                                </URLContainer>
                            )}
                        </FormContainer>
                    </Route>
                    <Route path="/contact">
                        <ContactContainer>
                            <ContactTitle>Contact Us</ContactTitle>
                            <ContactText>
                                If you have any questions or comments, please
                                send us an email at contact@mywebsite.com.
                            </ContactText>
                        </ContactContainer>
                    </Route>
                </Switch>
            </Container>
        </Router>
    );
};

export default Home;

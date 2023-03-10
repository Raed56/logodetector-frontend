import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    min-height: 100vh;
    background-color: #f7f7f7;
`;

export const Navbar = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1c7ed6;
    color: white;
    padding: 1rem;
    width: 100%;
`;

export const Logo = styled(Link)`
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    color: white;
`;

export const ContactLink = styled(Link)`
    font-size: 1rem;
    text-decoration: none;
    color: white;
    transition: opacity 0.2s;

    &:hover {
        opacity: 0.8;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
`;

export const Input = styled.input`
    padding: 0.5rem;
    font-size: 1rem;
    margin-right: 0.5rem;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    width: 300px;
    height: 40px;
    font-family: inherit;
`;

export const Button = styled.button`
    background-color: #1c7ed6;
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background-color: #1a6ab3;
    }
`;

export const URLContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const URLTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const URL = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: #1c7ed6;
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 3rem;
    background-color: white;
    padding: 2rem;
    border-radius: 0.25rem;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
    width: 80%;
    max-width: 600px;
`;

export const ContactTitle = styled.h2`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

export const ContactText = styled.p`
    font-size: 1rem;
    text-align: center;
`;

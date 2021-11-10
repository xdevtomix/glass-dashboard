import styled from "styled-components";

export default function Header() {
    return (
        <Container data-component="header">
            <h2>Hello Mr Bombastic</h2>
            <h1>Overview</h1>
        </Container>
    );
}

const Container = styled.div`
    grid-area: header;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    padding: 2rem;
    border-radius: 0.5rem;

    h2 {
        margin-bottom: 0.5rem;
    }
`;
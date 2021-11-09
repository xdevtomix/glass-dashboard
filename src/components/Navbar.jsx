import styled from "styled-components";

export default function Navbar() {
    return (
        <Container data-component="navbar">
            navbar
        </Container>
    );
}

const Container = styled.div`
    grid-area: navbar;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
`;
import styled from "styled-components";

export default function Header() {
    return (
        <Container data-component="header">
            header
        </Container>
    );
}

const Container = styled.div`
    grid-area: header;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
`;
import styled from "styled-components";

export default function Card2() {
    return (
        <Container data-component="card2">
            card2
        </Container>
    );
}

const Container = styled.div`
    grid-area: card2;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
`;
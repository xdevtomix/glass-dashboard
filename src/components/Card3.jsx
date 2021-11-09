import styled from "styled-components";

export default function Card3() {
    return (
        <Container data-component="card3">
            card3
        </Container>
    );
}

const Container = styled.div`
    grid-area: card3;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
`;
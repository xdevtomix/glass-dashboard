import styled from "styled-components";

export default function Card1() {
    return (
        <Container data-component="card1">
            card1
        </Container>
    );
}

const Container = styled.div`
    grid-area: card1;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
`;
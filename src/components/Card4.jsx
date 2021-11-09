import styled from "styled-components";

export default function Card4() {
    return (
        <Container data-component="card4">
            card4
        </Container>
    );
}

const Container = styled.div`
    grid-area: card4;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
`;
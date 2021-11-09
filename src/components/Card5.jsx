import styled from "styled-components";

export default function Card5() {
    return (
        <Container data-component="card5">
            card5
        </Container>
    );
}

const Container = styled.div`
    grid-area: card5;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
`;
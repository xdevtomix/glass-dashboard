import styled from "styled-components";

export default function Graph() {
    return (
        <Container data-component="graph">
            graph
        </Container>
    );
}

const Container = styled.div`
    grid-area: graph;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
`;
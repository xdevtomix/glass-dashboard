import styled from "styled-components";

export default function Debitcard() {
    return (
        <Container data-component="debitcard">
            debitcard
        </Container>
    );
}

const Container = styled.div`
    grid-area: debitcard;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
`;
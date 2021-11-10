import styled from "styled-components";

export default function Debitcard() {
    return (
        <Container data-component="debitcard">
            <img src="https://images.pexels.com/photos/45111/pexels-photo-45111.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="debitcard" />
        </Container>
    );
}

const Container = styled.div`
    grid-area: debitcard;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    border-radius: 0.5rem;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: 1000ms;

        :hover {
            transform: scale(2);
        }
    }
`;
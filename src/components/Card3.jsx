import styled from "styled-components";

export default function Card3() {
    return (
        <Container data-component="card3">
            <i className='bx bxs-file-archive'></i>
            <div>
                <p>Filed reports missing</p>
                <h3>3,231</h3>
                <span>75% missing</span>
                <a href="#">See more</a>
            </div>
        </Container>
    );
}

const Container = styled.div`
    grid-area: card3;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    padding: 2rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;

    i {
        font-size: 4rem;
        color: green;
        margin-right: 0.5rem;
    }

    div {
        display: flex;
        flex-direction: column;

        p {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.25rem;
        }

        h3 {
            font-size: 2rem;
            margin-bottom: 0.25rem;
        }

        span {
            font-size: 1.5rem;
            margin-bottom: 0.25rem;
        }

        a {
            font-size: 1rem;
            text-decoration: none;
            color: green;
        }
    }
`;
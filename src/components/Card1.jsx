import styled from "styled-components";

export default function Card1() {
    return (
        <Container data-component="card1">
            <i className='bx bxs-file'></i>
            <div>
                <p>Filed reports</p>
                <h3>1,241</h3>
                <span>25% success rate</span>
                <a href="#">See more</a>
            </div>
        </Container>
    );
}

const Container = styled.div`
    grid-area: card1;
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
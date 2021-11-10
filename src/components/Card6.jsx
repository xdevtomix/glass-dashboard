import styled from "styled-components";

export default function Card6() {
    return (
        <Container data-component="card6">
            <i className='bx bxs-file-js'></i>
            <div>
                <p>Blue lines</p>
                <h3>13,412</h3>
            </div>
        </Container>
    );
}

const Container = styled.div`
    grid-area: card6;
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
    }
`;
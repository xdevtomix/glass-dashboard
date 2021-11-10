import styled from "styled-components";

export default function Card4() {
    return (
        <Container data-component="card4">
            <i className='bx bxs-file-json'></i>
            <div>
                <p>Notified IPs</p>
                <h3>135</h3>
            </div>
        </Container>
    );
}

const Container = styled.div`
    grid-area: card4;
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
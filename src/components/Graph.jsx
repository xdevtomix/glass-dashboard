import styled from "styled-components";

export default function Graph() {
    return (
        <Container data-component="graph">
            <Bar color="pink" value="35%">
                <div>
                    <div>35%</div>
                </div>
                <span>Monday</span>
            </Bar>
            <Bar color="blue" value="45%">
                <div>
                    <div>45%</div>
                </div>
                <span>Tuesday</span>
            </Bar>
            <Bar color="green" value="25%">
                <div>
                    <div>25%</div>
                </div>
                <span>Wednesday</span>
            </Bar>
            <Bar color="orange" value="65%">
                <div>
                    <div>65%</div>
                </div>
                <span>Thursday</span>
            </Bar>
            <Bar color="teal" value="55%">
                <div>
                    <div>55%</div>
                </div>
                <span>Friday</span>
            </Bar>
        </Container>
    );
}

const Container = styled.div`
    grid-area: graph;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    padding: 2rem;
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
`;

const Bar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 15%;
    height: 80%;
    margin-right: 2rem;
    transition: 400ms;
    cursor: pointer;

    :hover {
        transform: scale(1.05);
    }

    >div {
        height: 80%;
        display: flex;
        align-items: flex-end;
        border: 1px solid rgba(0, 0, 0, 0.2);
        border-radius: 0.5rem;

        div {
            height: ${({value}) => value};
            background: ${({color}) => color};
            display: flex;
            align-items: center;
            padding: 0 1rem;
            letter-spacing: 0.25rem;
        }
    }

    span {
        height: 20%;
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        letter-spacing: 0.25rem;
        font-weight: 700;
    }
`;
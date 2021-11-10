import styled from "styled-components";

export default function Sidebar() {
    return (
        <Container data-component="sidebar">
            <div>
                <i className='bx bx-bar-chart'></i><span>Dashboard</span>
            </div>
            <div>
                <i className='bx bx-money'></i><span>Balance</span>
            </div>
            <div>
                <i className='bx bx-envelope'></i><span>Invoice</span>
            </div>
            <div>
                <i className='bx bx-credit-card-front'></i><span>Card</span>
            </div>
            <div>
                <i className='bx bx-podcast'></i><span>History</span>
            </div>
            <div>
                <i className='bx bx-info-circle'></i><span>Details</span>
            </div>
        </Container>
    );
}

const Container = styled.div`
    grid-area: sidebar;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 0.5rem;

    div {
        display: flex;
        align-items: center;
        padding: 0.5rem 1rem;
        margin-bottom: 2rem;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: transform 200ms;

        :hover {
            transform: scale(1.05);
        }

        i {
            font-size: 2.5rem;
            font-weight: 700;
            margin-right: 0.5rem;
        }
    
        span {
            font-size: 1.5rem;
            letter-spacing: 0.25rem;
        }
    }
`;
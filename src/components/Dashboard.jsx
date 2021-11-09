import styled from "styled-components";

import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Header from './Header';
import Card1 from './Card1';
import Card2 from './Card2';
import Card3 from './Card3';
import Graph from './Graph';
import Debitcard from './Debitcard';
import Card4 from './Card4';
import Card5 from './Card5';
import Card6 from './Card6';

export default function Dashboard() {
    return (
        <Container data-component="dashboard">
            <Navbar />
            <Sidebar />
            <Header />
            <Card1 />
            <Card2 />
            <Card3 />
            <Graph />
            <Debitcard />
            <Card4 />
            <Card5 />
            <Card6 />
        </Container>
    );
}

const Container = styled.div`
    width: 90%;
    height: 85vh;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    display: grid;
    grid-template-columns: 6fr 10fr 10fr 10fr;
    grid-template-rows: 2fr 2fr 4fr 6fr 3fr;
    grid-template-areas:    "navbar navbar navbar navbar"
                            "sidebar header header header"
                            "sidebar card1 card2 card3"
                            "sidebar graph graph debitcard"
                            "sidebar card4 card5 card6";
    grid-gap: 1rem;
    padding: 2rem;
    border-radius: 0.5rem;
`;
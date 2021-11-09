import styled from "styled-components";

export default function Sidebar() {
    return (
        <Container data-component="sidebar">
            sidebar
        </Container>
    );
}

const Container = styled.div`
    grid-area: sidebar;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
`;
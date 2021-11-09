import styled from "styled-components";

export default function Navbar() {
    return (
        <Container data-component="navbar">
            <Logo>
                <img src="https://images.pexels.com/photos/170809/pexels-photo-170809.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="logo" />
                <span>Dashboard</span>
            </Logo>
            <Search>
                <input placeholder="Search..." />
                <i className='bx bx-search'></i>
            </Search>
            <Icons>
                <i class='bx bx-envelope'></i>
                <i class='bx bx-bell'></i>
                <img src="https://images.pexels.com/photos/7890212/pexels-photo-7890212.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="woman" />
                <div>
                    <h4>Irene Smith</h4>
                    <span>@sanyi</span>
                </div>
            </Icons>
        </Container>
    );
}

const Container = styled.div`
    grid-area: navbar;
    background: linear-gradient(to top right, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5));
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    border-radius: 0.5rem;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;

    img {
        width: 4rem;
        height: 4rem;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 1rem;
    }

    span {
        font-size: 2rem;
        letter-spacing: 0.5rem;
    }
`;

const Search = styled.div`
    display: flex;
    align-items: center;

    input {
        border: none;
        outline: none;
        background: white;
        border-radius: 0.5rem;
        margin-right: 1rem;
        padding: 1rem;
        width: 30rem;
    }

    i {
        font-size: 2rem;
        color: green;
        cursor: pointer;
    }
`;

const Icons = styled.div`
    display: flex;
    align-items: center;

    i {
        font-size: 3rem;
        color: green;
        margin-right: 1rem;
        cursor: pointer;
    }

    img {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        object-fit: cover;
        margin: 0 1rem;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: 700;
        letter-spacing: 0.25rem;
    }

    span {
        font-size: 1.2rem;
    }
`;
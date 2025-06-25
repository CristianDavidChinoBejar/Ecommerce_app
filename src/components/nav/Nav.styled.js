import styled from 'styled-components'

export const Header = styled.header`
    padding: 1rem 2rem;
    background-color: ${({theme}) => theme.colors.mainColor};
`
export const NavLinks = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const NavList = styled.li`
    list-style: none;
    margin: 0 1rem;
`

export const Logo = styled.div`
    font-size: 1.5rem;
    font-weight: bold;

    a {
        text-decoration: none;
        color: inherit;
    }
`
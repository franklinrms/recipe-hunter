import styled from 'styled-components';
import theme from '../../style/theme';

export const HeaderContainer = styled.header`
    width: 100%;
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    /* z-index: 1000; */
    justify-content: space-between;
    align-items: center;
    letter-spacing: 2px;

    background: rgba(${theme.colors.surface_secondary});
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    z-index: 100;
    display: flex;
    padding: 5px;

    @media (max-width: 600px) {
        justify-content: space-around;

        div {
            display: none;
        }
    }
`;

export const Logo = styled.img`
    position: relative;
    left: 60px;
    width: 120px;

    @media (max-width: 600px) {
        display: none;
    }
`;

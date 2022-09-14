import styled from 'styled-components';
import theme from '../../style/theme';

const CardContainer = styled.button`
    border: none;
    border-radius: 16px;
    background-image: url(${({ bg }) => bg});
    background-size: cover;
    background-position: center;
    width: 500px;
    height: 300px;
    transition: 0.5s;
    font-weight: bold;
    font-size: 30px;
    position: relative;
    z-index: 1;

    &::after {
        content: '';
        border-radius: 16px;
        background-color: ${theme.colors.surface_primary};
        position: absolute;
        width: 500px;
        height: 300px;
        left: 0;
        top: 0;
        opacity: .2;
        z-index: -1;
    }
    
    &:hover {
        background-position: bottom;
        font-size: 36px;
        &::after {
            opacity: 0;
        }
    }
    @media (max-width: 600px) {
        width: 90vw;
        height: 65vw;
        &::after {
            width: 90vw;
            height: 65vw;
        }
    }

`;
export default CardContainer;

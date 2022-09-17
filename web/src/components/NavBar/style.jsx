import styled from 'styled-components';
import theme from '../../style/theme';

export const Menu = styled.div`
    position: fixed;
    background-color: ${theme.colors.surface_primary};
    height:  calc(100vh - 90px);
    bottom: 0;
    width: 15%;
    background: rgba(${theme.colors.surface_secondary});
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
    z-index: 100;
    display: flex;
    flex-direction: column;
    padding: 20px;
    padding-top: 50px;

    @media (max-width: 850px) {
        padding: 10px;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: row;
        height: 70px;
        width: 100%;
    }
`;

export const ItemMenu = styled.button`
    background: transparent;
    border: none;
    color: ${({ isSelected }) => (isSelected ? theme.colors.brand : theme.colors.text_on_brand_color)};
    font-size: 20px;
    letter-spacing: 2px;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;

    &:hover {
        color: ${theme.colors.brand};
        font-weight: bold;
        i { 
            color: ${theme.colors.brand};
        }
    }

    i { 
        margin: 0;
        padding: 0;
        font-size: 30px;
        color: ${({ isSelected }) => (isSelected ? theme.colors.brand : theme.colors.text_on_brand_color)};

    }

    @media (max-width: 600px) {
        padding: 10px;
        flex-direction: column;
        font-size: 16px;
        letter-spacing: 1px;
        gap: 2px;
    }
`;

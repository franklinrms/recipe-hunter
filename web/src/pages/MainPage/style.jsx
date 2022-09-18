import styled from 'styled-components';
import theme from '../../style/theme';

export const CardsContainer = styled.div`
    width: 85%;
    position: relative;
    left: 15%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 30px;
    justify-content: center;

    @media (max-width: 850px) {
        padding-bottom: 90px;
        left: 0;
        width: 100%;
    }
`;

export const TabsContainer = styled.div`
    width: 85%;
    position: relative;
    left: 15%;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-x: auto;
    overflow-y: hidden;

    ::-webkit-scrollbar {
        display: none;
    }

    @media (max-width: 850px) {
        left: 0;
        width: 100%;
        padding: 10px 0 0 10px;
        justify-content: flex-start;
    }
`;

export const SurpriseMeButton = styled.button`
    position: fixed;
    z-index: 1000;
    bottom: 30px;
    right: 30px;
    border: none;
    background-color: ${theme.colors.brand};
    border-radius: 10px;
    padding: 20px 30px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-weight: 700;
    font-size: 24px;
    transition: 0.5s;

    &:hover {
        transform: scale(1.1);
    }
    @media (max-width: 850px) {
        right: 10px;
        bottom: 90px;
    }
`;

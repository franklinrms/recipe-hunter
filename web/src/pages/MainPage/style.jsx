import styled from 'styled-components';

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

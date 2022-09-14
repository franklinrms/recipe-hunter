import styled from 'styled-components';

const CardsContainer = styled.div`
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

export default CardsContainer;

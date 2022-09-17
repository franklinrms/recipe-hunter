import styled from 'styled-components';
import theme from '../../style/theme';
import CustomButton from '../Button/style';

export const SearchBarContainer = styled.div`
    position: relative;
    /* top: 20px; */
    width: 85%;
    left: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    @media (max-width: 850px) {
        left: 0;
        width: 100%;
    }
`;

export const Input = styled.input`
    width: 50%;
    height: 50px;
    padding: 10px 25px;
    border: none;
    border-radius: 10px;
    background-color: ${theme.colors.surface_primary};
    font-size: 18px;

    ::placeholder {
        color: ${theme.colors.text_secondary};
    }

    @media (max-width: 850px) {
        width: 80%;
    }
`;

export const SearchButton = styled(CustomButton)`
    background-color: ${theme.colors.surface_primary};
    border: none;
    height: 50px;
    border-radius: 10px;
    padding: 10px 25px;
    margin-left: 10px;
    font-size: 24px;
    color: ${theme.colors.text_on_brand_color};
    align-items: center;
    transition: 0.5s;

    :hover {
        background-color: ${theme.colors.brand};
    }
`;

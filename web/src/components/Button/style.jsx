import styled from 'styled-components';
import theme from '../../style/theme';

const CustomButton = styled.button`
    background-color: ${({ isSelected }) => (isSelected ? theme.colors.brand : theme.colors.surface_primary)};
    display: flex;
    flex-wrap: nowrap;
    border-radius: 10px;
    border: none;
    padding: 10px;
    white-space: nowrap;
    transition: 0.5s;
    margin: 5px;
    &:active {
        transform: translateY(5px);
    }
`;

export default CustomButton;

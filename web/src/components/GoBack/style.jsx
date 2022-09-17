import styled from 'styled-components';
import theme from '../../style/theme';

const GoBackContainer = styled.button`
    position: absolute;
    top: 10px;
    left: 10px;
    width: 50px;
    height: 50px;
    border: none;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 36px;
    border-radius: 15px;
    background: rgba(${theme.colors.surface_secondary});
    backdrop-filter: blur(6.5px);
    -webkit-backdrop-filter: blur(6.5px);
`;
export default GoBackContainer;

import styled from 'styled-components';
import theme from '../../style/theme';

const LoadingContainer = styled.span`
    position: relative;
    left: 5%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    i {
        font-size: 72px;
        color: ${theme.colors.text_on_brand_color};
    }
`;
export default LoadingContainer;

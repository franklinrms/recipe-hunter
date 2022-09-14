import styled from 'styled-components';
import theme from '../../style/theme';

const LoadingContainer = styled.span`
    width: 100%;
    height: 50vh;
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

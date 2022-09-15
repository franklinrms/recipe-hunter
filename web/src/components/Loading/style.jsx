import styled from 'styled-components';
import theme from '../../style/theme';

const LoadingContainer = styled.span`
    height: calc(100vh - 90px);
    width: 85%;
    position: relative;
    left: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
        font-size: 72px;
        color: ${theme.colors.text_on_brand_color};
    }
`;
export default LoadingContainer;

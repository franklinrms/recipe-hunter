import styled from 'styled-components';
import theme from '../../style/theme';

export const ContainerDetails = styled.div`
    width: 50%;
    margin: 0 auto;
    padding-bottom: 95px;
    position: relative;
    top: 55px;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 20px;
        font-weight: 500;
        margin-top: 25px;
        margin-bottom: 20px;
        letter-spacing: 1px;
    }
    li, p {
        color: ${theme.colors.text_secondary};
        font-size: 18px; 
        line-height: 30px;
        margin-left: 30px;
    }
    p {
        margin-left: 5px;
    }
    iframe {
        margin: 0 auto;
        width: 95%;
        height: 26vw;
    }

    @media (max-width: 850px) {
        width: 90%;
        iframe {
            height: 52vw;
        }
    }

`;

export const Container = styled.div`
    width: 85%;
    position: relative;
    left: 15%;

    @media (max-width: 850px) {
        left: 0;
        width: 100%;
    }

`;

export const ContainerHeader = styled.header`
    position: relative;
    width: 100%;
    height: 35vh;
    background-image: ${(props) => `url(${props.bg})`};
    background-size: cover;
    background-position: center;

    #Title {
        /* border: 2px solid red; */
        margin: 0 auto;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: absolute;
        bottom: -80px;
        background-color: rgba(12,15,20,0.65);
        backdrop-filter: blur(10px);
        border-radius: 25px;
        padding: 30px 20px;

        @media (max-width: 850px) {
            justify-content: space-between;
        }

        i {
            font-size: 30px;
            color: ${theme.colors.text_secondary};
            cursor: pointer;
        }

        span {
            h1 {
                font-size: 24px;
                margin: 0;
            }
            h2 {
                font-size: 18px;
                margin: 0;
                font-weight: 500;
                color: ${theme.colors.text_on_brand_color};
            }
        }
    }
`;

import styled, { keyframes } from 'styled-components';

const likeAnim = keyframes`
   to {
    background-position: right;
    }
`;

const Like = styled.button`
    display: flex;
    align-items: center;
    border: none;
    background-color: transparent;

    #heart-icon {
        height: 100px;
        width: 100px;
        background: ${(props) => `url(${props.bg})`};
        background-position: left;
    }
    .liked {
        background-position: right;
        animation: ${likeAnim} 0.7s steps(28) forwards;
    }

    .heart-bg {
        height: 60px;    
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 100ms ease;
    }
`;

export default Like;

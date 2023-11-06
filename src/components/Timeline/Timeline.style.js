import styled, { keyframes } from "styled-components";
import bgImg from "assets/gradient-background.png";

export const fadeIn = keyframes`

    from { opacity: 0; }
    to { opacity: 1 ; }
`;

export const drawDashedLine = keyframes`

    from {
        opacity: 0;
        stroke-dasharray: 10 12;
    }
    to {
        opacity: 1;
        stroke-dasharray: 16 24;
    }
`;



const Header = styled.header`

    height: 120px;
    
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 999;

    border-bottom: 2px solid magenta;
`;


const Wrapper = styled.div`

    width: 100%;
    position: relative;
`;


const StickyContainer = styled.div`

    overflow-x: hidden;

    display: flex;
    position: sticky;
    overflow-y: hidden;
    top:0;

    padding-top: 168px;

    height: 100vh;
    background-image: url(${bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;


export const style = {
    Wrapper,
    Header,
    StickyContainer
}
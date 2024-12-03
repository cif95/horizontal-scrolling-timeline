import styled, { keyframes } from "styled-components";

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

    background: rgb(14,13,37);
    background: -moz-radial-gradient(circle, rgba(14,13,37,1) 30%, rgba(23,23,83,1) 67%, rgba(47,41,120,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(14,13,37,1) 30%, rgba(23,23,83,1) 67%, rgba(47,41,120,1) 100%);
    background: radial-gradient(circle, rgba(14,13,37,1) 30%, rgba(23,23,83,1) 67%, rgba(47,41,120,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0e0d25",endColorstr="#2f2978",GradientType=1); 
`;


export const style = {
    Wrapper,
    Header,
    StickyContainer
}
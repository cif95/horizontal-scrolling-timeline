import styled from "styled-components";

export const LineContainer = styled.div`

	position: absolute;
	top: 50%;
	left: 116%;
	transform: translateY(-50%);
`;

export const CurvedLineContainer = styled(LineContainer)`

	transform: none;
	bottom: ${({$bottom}) => $bottom ?? "69%"};
	top: ${({$top}) => $top ?? "unset"};
`;

export const Wrapper = styled.div`

    width: 100%;
    position: relative;
`;

export const StickyContainer = styled.div`

    display: flex;
    position: sticky;
    top:0;

    overflow-y: hidden;
    overflow-x: hidden;

    padding-top: 19.640vh;
    height: 100vh;

    background: rgb(14,13,37);
    background: -moz-radial-gradient(circle, rgba(14,13,37,1) 30%, rgba(23,23,83,1) 67%, rgba(47,41,120,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(14,13,37,1) 30%, rgba(23,23,83,1) 67%, rgba(47,41,120,1) 100%);
    background: radial-gradient(circle, rgba(14,13,37,1) 30%, rgba(23,23,83,1) 67%, rgba(47,41,120,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#0e0d25",endColorstr="#2f2978",GradientType=1); 
`;


export const style = {
    Wrapper,
    StickyContainer
}

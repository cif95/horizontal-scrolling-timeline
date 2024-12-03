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
    
    background: rgb(0,0,0);
    background: -moz-radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(3,3,4,1) 67%, rgba(37,77,82,1) 100%);
    background: -webkit-radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(3,3,4,1) 67%, rgba(37,77,82,1) 100%);
    background: radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(3,3,4,1) 67%, rgba(37,77,82,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#254d52",GradientType=1); 
`;


export const style = {
    Wrapper,
    StickyContainer
}

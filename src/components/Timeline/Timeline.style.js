import styled from "styled-components";
import bgImg from "assets/gradient-background.png";

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

    background-image: url(${bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
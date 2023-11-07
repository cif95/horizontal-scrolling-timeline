import { Col } from "style/layout";
import styled, { css } from "styled-components";
import { fadeIn, drawDashedLine } from "../Timeline.style";


const Container = styled.section`

    flex-shrink: 0;
    height: 100%;
    position: relative;

    display: flex;
	flex-direction: row;
	gap: 385px;

    width: 1800px;

	padding-left: 287px;
`;


const Box = styled.div`

	border-radius: 28px;
	background: #D9D9D9;
	width: 128px;
	aspect-ratio: 1;
	transition: all 500ms ease;

	opacity: 0;
	position: relative;

	visibility: ${({$isHidden}) => $isHidden ? 'hidden' : 'visible'};

	${({ $animationDelay }) => $animationDelay && css`
		animation: 300ms ${fadeIn} linear ${$animationDelay} forwards;
	`};
`;

const LineContainer = styled.div`

	position: absolute;
	top: 50%;
	left: 116%;
	transform: translateY(-50%);

	svg line{
		opacity: 0;
		transition: all 500ms ease;

		${({ $animationDelay }) => $animationDelay && css`
			animation: ${drawDashedLine} 1s ease forwards ${$animationDelay};
		`};
	}
`;

const CurvedLineContainer = styled(LineContainer)`

	transform: none;
	bottom: ${({$bottom}) => $bottom ?? "69%"};
	top: ${({$top}) => $top ?? "unset"};

	svg path {
		opacity: 0;
		animation: ${drawDashedLine} 1s ease forwards 500ms;
		transition: all 500ms ease;

		${({ $animationDelay }) => $animationDelay && css`
			animation: ${drawDashedLine} 1s ease forwards ${$animationDelay};
		`};
	}
`;


const BoxesColumn = styled(Col)`

	gap: 8.870vh;
	height: 100%;
`;


export const style = {
	Container,
	Box,
	BoxesColumn,
	LineContainer,
	CurvedLineContainer
};
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

    width: 1300px;
`;


const Box = styled.div`

	border-radius: 28px;
	background: #D9D9D9;
	width: 128px;
	aspect-ratio: 1;
	margin-bottom: 27px;
	position: relative;

	opacity: ${({$visible}) => $visible ? 1 : 0};
	transition: all 500ms ease;

	${({ $animate, $animationDelay }) => $animate && css`
		animation: 300ms ${fadeIn} linear ${$animationDelay} forwards;
	`};
`;

const Dot = styled.div`

	border-radius: 50%;
	background: #D9D9D9;
	width: 76px;
	aspect-ratio: 1;
	margin-bottom: 27px;

	opacity: ${({$visible}) => $visible ? 1 : 0};
	transition: all 500ms ease;

	${({ $animate, $animationDelay }) => $animate && css`
		animation: 300ms ${fadeIn} linear ${$animationDelay} forwards;`
	};
`;


const BoxesColumn = styled(Col)`

	gap: 84px;
	height: 100%;
	max-height: 578px;
`;

const LineContainer = styled.div`

	position: absolute;
	top: 50%;
	left: 116%;
	transform: translateY(-50%);

	svg line{
		opacity: ${({$visible}) => $visible ? 1 : 0};
		transition: all 500ms ease;

		${({ $animate, $animationDelay }) => $animate && css`
			animation: ${drawDashedLine} 1s ease forwards ${$animationDelay};
		`};
	}
`;


export const style = {
	Container,
	Box,
	Dot,
	BoxesColumn,
	LineContainer
};
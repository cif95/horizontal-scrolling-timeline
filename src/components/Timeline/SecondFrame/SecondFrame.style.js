import { Col } from "style/layout";
import styled, { css, keyframes } from "styled-components";

export const drawDashedLine = keyframes`

    from {
        stroke-dasharray: 10 12;
    }
    to {
        stroke-dasharray: 16 24;
    }
`;

const Container = styled.section`

    flex-shrink: 0;
    height: 100%;
    position: relative;

    display: flex;
	flex-direction: row;
	gap: 385px;
	padding-left: 24px;

    width: 1300px;
`;

const Box = styled.div`

	border-radius: 28px;
	background: #D9D9D9;
	width: 128px;
	aspect-ratio: 1;
	position: relative;
	opacity: 0;
	visibility: ${({$isHidden}) => $isHidden ? 'hidden' : 'visible'};

	${({ $isVisible, $fadeOutDelay, $fadeInDelay }) => $isVisible 
		? css`
			opacity: 1;
			transition: all 500ms ease;
			transition-delay: ${$fadeInDelay};
		` 
		: css`
			opacity: 0;
			transition: all 500ms ease;
			transition-delay: ${$fadeOutDelay};
		`
	}
`;

const DotBox = styled.div`

	width: 128px;
	aspect-ratio: 1;
	position: relative;
	opacity: 0;

	display: flex;
	justify-content: flex-start;
	align-items: center;

	${({ $isVisible, $fadeOutDelay, $fadeInDelay }) => $isVisible 
		? css`
			opacity: 1;
			transition: all 500ms ease;
			transition-delay: ${$fadeInDelay};
		` 
		: css`
			opacity: 0;
			transition: all 500ms ease;
			transition-delay: ${$fadeOutDelay};
		`
	}
`;

const Dot = styled.div`

	border-radius: 50%;
	background: #D9D9D9;
	width: 76px;
	aspect-ratio: 1;
	line-height: 128px;
`;

const BoxesColumn = styled(Col)`

	gap: 8.870vh;
	height: 100%;
`;

const LineContainer = styled.div`

	position: absolute;
	top: 50%;
	left: 116%;
	transform: translateY(-50%);

	svg line{
		transition: all 500ms ease;
		opacity: 0;

		${({ $isVisible, $fadeOutDelay, $fadeInDelay }) => $isVisible 
			? css`
				opacity: 1;
				transition: all 500ms ease;
				transition-delay: ${$fadeInDelay};
				animation: ${drawDashedLine} 1s ease forwards ${$fadeInDelay};
			` 
			: css`
				opacity: 0;
				transition: all 500ms ease;
				transition-delay: ${$fadeOutDelay};
			`
		}
	}
`;


export const style = {
	Container,
	Box,
	DotBox,
	Dot,
	BoxesColumn,
	LineContainer
};
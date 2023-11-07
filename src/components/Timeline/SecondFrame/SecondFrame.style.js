import { Col } from "style/layout";
import styled from "styled-components";


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

	visibility: ${({$isHidden}) => $isHidden ? 'hidden' : 'visible'};
`;

const DotBox = styled.div`

	width: 128px;
	aspect-ratio: 1;
	position: relative;

	display: flex;
	justify-content: flex-start;
	align-items: center;
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
`;


export const style = {
	Container,
	Box,
	DotBox,
	Dot,
	BoxesColumn,
	LineContainer
};
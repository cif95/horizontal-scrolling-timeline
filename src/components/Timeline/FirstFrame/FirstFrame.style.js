import { Col } from "style/layout";
import styled from "styled-components";


const Container = styled.section`

    flex-shrink: 0;
    height: 100%;
	width: 1800px;
    position: relative;

    display: flex;
	flex-direction: row;
	gap: 385px;

	padding-left: 287px;
`;

const Box = styled.div`

	border-radius: 28px;
	background: #D9D9D9;
	width: 128px;
	aspect-ratio: 1;
	position: relative;
	visibility: ${({$isHidden}) => $isHidden ? 'hidden' : 'visible'};
`;

const BoxesColumn = styled(Col)`

	gap: 8.870vh;
	height: 100%;
`;


export const style = {
	Container,
	Box,
	BoxesColumn
};
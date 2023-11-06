import { style } from "./FirstFrame.style";
import { ReactComponent as DottedLine } from "assets/dotted-line.svg";
import { ReactComponent as CurvedLine } from "assets/curved-dotted-line.svg";
import { ReactComponent as CurvedLineToDown } from "assets/dotted-line-facing-down.svg";

const { 
	Container,
	BoxesColumn,
	Box,
	LineContainer,
	CurvedLineContainer
} = style;

export const FirstFrame = () => {
	return(
		<Container>
			<BoxesColumn mainAxis="center">

				<Box $margin="0 0 27px" $animationDelay="0ms">

					<LineContainer $animationDelay="300ms">
						<DottedLine/>
					</LineContainer>

					<CurvedLineContainer $animationDelay="0ms">
						<CurvedLine/>
					</CurvedLineContainer>

				</Box>
			</BoxesColumn>

			<BoxesColumn mainAxis="flex-start">
				<Box $animationDelay="300ms">
					<LineContainer $animationDelay="1300ms">
						<DottedLine/>
					</LineContainer>
				</Box>
				<Box $animationDelay="600ms">

					<LineContainer $animationDelay="1700ms">
						<DottedLine/>
					</LineContainer>

					<CurvedLineContainer 
						$animationDelay="2000ms"
						$bottom="unset"
						$top="70%"
					>
						<CurvedLineToDown/>
					</CurvedLineContainer>

				</Box>
			</BoxesColumn>

			<BoxesColumn mainAxis="flex-start">

				<Box $animationDelay="1800ms">

					<CurvedLineContainer 
						$animationDelay="3000ms"
						$bottom="unset"
						$top="50%"
					>
						<CurvedLineToDown/>
					</CurvedLineContainer>
				</Box>

				<Box $animationDelay="2100ms"/>
				<Box $animationDelay="2400ms"/>
			</BoxesColumn>

		</Container>
	)
}
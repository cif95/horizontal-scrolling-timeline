import useElementOnScreen from "hooks/useElementOnScreen";
import { style } from "./SecondFrame.style";
import { ReactComponent as DottedLine } from "assets/dotted-line.svg";


const { 
	Container,
	BoxesColumn,
	Box,
	DotBox,
	Dot,
	LineContainer
} = style;

export const SecondFrame = ({ isScrollingBack }) => {

	const [ targetRef, isTargetOnScreen ] = useElementOnScreen(null, '0px', 0.3);
	const [ dotTargetRef, isDotTargetOnScreen ] = useElementOnScreen();

	return(
		<Container ref={targetRef}>
			<BoxesColumn mainAxis="flex-start" >
				<Box $isHidden/>
				<Box 
					$isVisible={isTargetOnScreen && !isScrollingBack}
					$fadeInDelay={"200ms"}
					$fadeOutDelay={"1200ms"}
				>
					<LineContainer 
						$isVisible={isTargetOnScreen && !isScrollingBack}
						$fadeInDelay={"300ms"}
						$fadeOutDelay={"800ms"}
					>
						<DottedLine/>
					</LineContainer>
				</Box>
			</BoxesColumn>

			<BoxesColumn mainAxis="flex-start">
				<Box $isHidden/>

				<DotBox
					ref={dotTargetRef}
					$isVisible={isDotTargetOnScreen && !isScrollingBack}
					$fadeInDelay={"500ms"}
					$fadeOutDelay={"500ms"}
					$bgColor={"transparent"}
				>
					<Dot />
				</DotBox>
			</BoxesColumn>

		</Container>
	)
}
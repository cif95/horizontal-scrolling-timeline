import { useState } from "react";
import useElementOnScreen from "hooks/useElementOnScreen";
import { style } from "./SecondFrame.style";
import { ReactComponent as DottedLine } from "assets/dotted-line.svg";


const { 
	Container,
	BoxesColumn,
	Box,
	Dot,
	LineContainer
} = style;

export const SecondFrame = () => {

	const [isAnimationEnded, setIsAnimationEnded] = useState(false);

	const [ targetRef, isTargetOnScreen ] = useElementOnScreen(null, '0px', 0.2);
	const [ dotTargetRef, isDotTargetOnScreen ] = useElementOnScreen();

	return(
		<Container ref={targetRef}>
			<BoxesColumn mainAxis="center" >
				<Box 
					$animate={isTargetOnScreen && !isAnimationEnded}
					$animationDelay="200ms"
					$visible={isAnimationEnded}
				>
					<LineContainer 
						$animationDelay="500ms"
						$visible={isAnimationEnded}
						$animate={isTargetOnScreen && !isAnimationEnded}
					>
						<DottedLine/>
					</LineContainer>
				</Box>
			</BoxesColumn>

			<BoxesColumn mainAxis="center">
				<Dot 
					ref={dotTargetRef}
					$animate={isDotTargetOnScreen && !isAnimationEnded}
					$animationDelay="350ms"
					$visible={isAnimationEnded}
					onAnimationEnd={() => setIsAnimationEnded(true)}
				/>
			</BoxesColumn>

		</Container>
	)
}
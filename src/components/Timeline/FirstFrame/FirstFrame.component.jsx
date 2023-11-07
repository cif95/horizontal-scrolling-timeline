import { style } from "./FirstFrame.style";
import { ReactComponent as DottedLine } from "assets/dotted-line.svg";
import { ReactComponent as CurvedLine } from "assets/curved-dotted-line.svg";
import { ReactComponent as CurvedLineToDown } from "assets/dotted-line-facing-down.svg";

import { motion } from "framer-motion";

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
			<BoxesColumn mainAxis="flex-start">

				<Box $isHidden/>

				<Box
					as={motion.div}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
				>

					<LineContainer $animationDelay="300ms">
						<DottedLine/>
					</LineContainer>

					<CurvedLineContainer $animationDelay="0ms">
						<CurvedLine/>
					</CurvedLineContainer>
				</Box>
			</BoxesColumn>

			<BoxesColumn mainAxis="flex-start">
				<Box
					as={motion.div}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					<LineContainer $animationDelay="500ms">
						<DottedLine/>
					</LineContainer>
				</Box>
				<Box
					as={motion.div}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<LineContainer $animationDelay="600ms">
						<DottedLine/>
					</LineContainer>

					<CurvedLineContainer 
						$animationDelay="700ms"
						$bottom="unset"
						$top="70%"
					>
						<CurvedLineToDown/>
					</CurvedLineContainer>
				</Box>
			</BoxesColumn>

			<BoxesColumn mainAxis="flex-start">

				<Box
					as={motion.div}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					<CurvedLineContainer 
						$animationDelay="1000ms"
						$bottom="unset"
						$top="50%"
					>
						<CurvedLineToDown/>
					</CurvedLineContainer>
					
				</Box>

				<Box
					as={motion.div}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				/>

				<Box
					as={motion.div}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				/>

			</BoxesColumn>
		</Container>
	)
}
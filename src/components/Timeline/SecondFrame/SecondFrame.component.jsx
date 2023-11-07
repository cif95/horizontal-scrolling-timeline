import { style } from "./SecondFrame.style";
import { ReactComponent as DottedLine } from "assets/dotted-line.svg";

import { motion } from "framer-motion";

const { 
	Container,
	BoxesColumn,
	Box,
	DotBox,
	Dot,
	LineContainer
} = style;

export const SecondFrame = () => {

	return(
		<Container >
			<BoxesColumn mainAxis="flex-start" >
				<Box $isHidden/>
				<Box
					as={motion.div}
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<LineContainer >
						<DottedLine
							as={motion.line}
							initial={{ pathLength: 0, strokeDasharray: '10 12' }}
							transition={{ duration: 0.5, delay: 0.9 }}
							whileInView={{ pathLength: 1, strokeDasharray: '16 24' }}
						/>
					</LineContainer> 
				</Box>
			</BoxesColumn>

			<BoxesColumn mainAxis="flex-start">
				<Box $isHidden/>

				<DotBox	$bgColor={"transparent"}>
					<Dot
						as={motion.div}
						initial={{ opacity: 0 }}
						transition={{ duration: 0.5, delay: 1 }}
						whileInView={{ opacity: 1 }} 
					/>
				</DotBox>
			</BoxesColumn>

		</Container>
	)
}
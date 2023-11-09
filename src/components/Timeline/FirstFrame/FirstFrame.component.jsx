import { style } from "./FirstFrame.style";
import { AnimatedList } from "components/motions/AnimatedList.component";
import { AnimatedLine } from "components/motions/AnimatedLine.component";
import { AnimatedCurvedLine } from "components/motions/AnimatedLineCurved.component";

import { motion } from "framer-motion";

const { 
	Container,
	BoxesColumn,
	Box
} = style;

export const FirstFrame = () => {

	const boxAnimation = {
		hidden: { opacity: 0, scale: 0.5 },
		visible: { opacity: 1, scale: 1 }
	};
	
	return(
		<Container>

			<BoxesColumn mainAxis="flex-start">
				<Box $isHidden/>
				<Box 
					as={motion.div}
					variants={boxAnimation}
					initial="hidden"
					animate="visible"
				>
					<AnimatedLine/>
					<AnimatedCurvedLine/>
				</Box>
			</BoxesColumn>

			<AnimatedList>
				<BoxesColumn mainAxis="flex-start">
					<Box as={motion.div} variants={boxAnimation}>
						<AnimatedLine delay={0.3}/>
					</Box>
					<Box as={motion.div} variants={boxAnimation}>
						<AnimatedLine delay={0.4}/>
						<AnimatedCurvedLine 
							facingDown
							topOffset={"70%"}
							bottomOffset={"unset"}
							delay={0.5}
						/>
					</Box>
				</BoxesColumn>
			</AnimatedList>

			<BoxesColumn mainAxis="flex-start">
				<Box 
					as={motion.div}
					variants={boxAnimation}
					initial="hidden"
					animate="visible"
					transition={{delay: 0.5}}
				>
					<AnimatedCurvedLine
						facingDown
						topOffset={"40%"}
						bottomOffset={"unset"}
						delay={0.6}
					/>
				</Box>
				<Box 
					as={motion.div}
					variants={boxAnimation}
					initial="hidden"
					animate="visible"
					transition={{delay: 0.7}}
				>
					<AnimatedLine delay={0.6}/>
				</Box>
				<Box 
					as={motion.div}
					variants={boxAnimation}
					initial="hidden"
					animate="visible"
					transition={{delay: 0.9}}
				/>
			</BoxesColumn>
			
		</Container>
	)
}
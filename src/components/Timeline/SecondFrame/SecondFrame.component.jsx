import { style } from "./SecondFrame.style";
import { motion } from "framer-motion";
import { AnimatedLineOnView } from "components/motions/AnimatedLineOnView.component";

const { 
	Container,
	BoxesColumn,
	Box,
	DotBox,
	Dot
} = style;

export const SecondFrame = () => {

	const boxAnimation = {
		hidden: { opacity: 0, scale: 0.5 },
		visible: { opacity: 1, scale: 1 }
	};

	return(
		<Container >
			
			<BoxesColumn mainAxis="flex-start" >
				<Box $isHidden/>
				<Box 
					as={motion.div}
					variants={boxAnimation}
					transition={{delay: 0.8}}
					initial="hidden"
					animate="visible"
				>
					<AnimatedLineOnView delay={0.2}/>
				</Box>
			</BoxesColumn>

			<BoxesColumn mainAxis="flex-start">
				<Box $isHidden/>
				<DotBox	$bgColor={"transparent"}>
					<Dot
						as={motion.div}
						variants={boxAnimation}
						initial="hidden"
						whileInView="visible"
						transition={{ duration: 0.2, delay: 0.4 }}
					/>
				</DotBox>
			</BoxesColumn>

		</Container>
	)
}
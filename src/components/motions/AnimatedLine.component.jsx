import { motion } from "framer-motion";
import { LineContainer } from "components/Timeline/Timeline.style";

export const AnimatedLine = ({ delay = 0 }) => {

	return (
		<LineContainer >
			<svg width="337" height="8" viewBox="0 0 337 8" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.line
					initial={{ 
						opacity: 0,
						pathLength: 0,
						pathSpacing: 0.08
					}}
					animate={{
						opacity: 1, 
						pathLength: 0.05,
						pathSpacing: 0.08
					}}
					transition={{
						duration: 1,
						ease: "easeInOut",
						delay: delay
					}}
					x1="4"
					y1="4"
					x2="333"
					y2="4"
					stroke="white"
					stroke-width="8"
					stroke-linecap="round"
					stroke-dasharray="16 24"
				/>
			</svg>
		</LineContainer>
	)
}
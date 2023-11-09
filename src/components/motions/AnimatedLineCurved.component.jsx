import { motion } from "framer-motion";
import { CurvedLineContainer } from "components/Timeline/Timeline.style";


export const AnimatedCurvedLine = ({ 
	topOffset,
	bottomOffset,
	facingDown,
	delay = 0,
}) => {

	const pathD = facingDown ? "M4 4C109.035 9.11873 149.664 28.3618 175 105.25C209.159 192.293 263.66 189.624 346 206.5" 
	: "M4 207C109.035 201.881 149.664 182.638 175 105.75C209.159 18.7073 263.66 21.3756 346 4.5";

	return (
		<CurvedLineContainer $top={topOffset} $bottom={bottomOffset}>
			<svg width="350" height="211" viewBox="0 0 350 211" fill="none" xmlns="http://www.w3.org/2000/svg">
				<motion.path
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
					d={pathD}
					stroke="white"
					stroke-width="8"
					stroke-linecap="round"
					stroke-dasharray="16 24"
				/>
			</svg>
		</CurvedLineContainer>
	)
}

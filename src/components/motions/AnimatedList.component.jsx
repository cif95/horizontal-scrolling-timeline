import { motion } from "framer-motion";


export const AnimatedList = ({children, childrenDelay = 0.2}) => {

	return(
		<motion.div
			variants={{
				visible: {
					opacity: 1,
					transition: { 
						staggerChildren: childrenDelay,
						type: 'spring'
					}
				},
				hidden: { 
					opacity: 0,
				},
			}}
			initial='hidden'
			animate='visible'
		>
			{children}
		</motion.div>
	)
}
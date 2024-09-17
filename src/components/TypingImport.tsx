'use client'

import { TypeAnimation } from 'react-type-animation'

const TypingText = () => {
	return (
		<div className="h-[300px] w-[] mt-48">
			<TypeAnimation
				sequence={[
					// Same substring at the start will only be typed out once, initially
					'Helping small businesses and individuals feel more confident with their website!',
					4000, // wait 2s before replacing text
					'Helping small businesses and individuals get better value out of CMS products!',
					4000,
					'Helping small businesses and individuals create memorable online first impressions!',
					4000,
					'Helping small businesses and individuals gain knowledge about website creation!',
					4000,
					'Helping small businesses and individuals follow best practices for improved quality!',
					4000
				]}
				wrapper="span"
				speed={50}
				style={{ fontSize: '2em', display: 'inline-block', color: '#fff' }}
				repeat={Infinity}
			/>
		</div>
	)
}

export default TypingText

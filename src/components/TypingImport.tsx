'use client'

import { TypeAnimation } from 'react-type-animation'

const TypingText = () => {
	return (
		<div className="h-[300px] w-[] mt-48">
			<TypeAnimation
				sequence={[
					// Same substring at the start will only be typed out once, initially
					'Helping small businesses feel more confident in their website!',
					2000, // wait 2s before replacing text
					'Helping small businesses get better value out of CMS products!',
					2000,
					'Helping small businesses create memorable online first impressions!',
					2000,
					'Helping small businesses gain knowledge about website creation!',
					2000,
					'Helping small businesses follow best practices for improved quality!',
					2000
				]}
				wrapper="span"
				speed={60}
				style={{ fontSize: '2em', display: 'inline-block', color: '#fff', textShadow: '2px 1px' }}
				repeat={Infinity}
			/>
		</div>
	)
}

export default TypingText

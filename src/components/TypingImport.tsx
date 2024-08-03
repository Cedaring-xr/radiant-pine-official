'use client'

import { TypeAnimation } from 'react-type-animation'

const TypingText = () => {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				'Helping small businesses feel more confident in their website!',
				2000, // wait 2s before replacing text
				'Helping small businesses get better value out of CMS products!',
				2000,
				'Helping small businesses create memorable online first impressions!',
				2000,
				'Helping small businesses become more knowledgeable about the internet!',
				2000,
				'Helping small businesses follow website best practices!',
				2000
			]}
			wrapper="span"
			speed={60}
			style={{ fontSize: '2em', display: 'inline-block' }}
			repeat={Infinity}
		/>
	)
}

export default TypingText

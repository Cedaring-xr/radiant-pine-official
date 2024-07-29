'use client'

import { TypeAnimation } from 'react-type-animation'

const ExampleComponent = () => {
	return (
		<TypeAnimation
			sequence={[
				// Same substring at the start will only be typed out once, initially
				'Helping small businesses Improve their web presense',
				2000, // wait 1s before replacing "Mice" with "Hamsters"
				'Helping small businesses adapt to changes',
				2000,
				'Helping small businesses streamline their websites',
				2000,
				'Helping small businesses create better first impressions',
				2000
			]}
			wrapper="span"
			speed={50}
			style={{ fontSize: '2em', display: 'inline-block' }}
			repeat={Infinity}
		/>
	)
}

export default ExampleComponent

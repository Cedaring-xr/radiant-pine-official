import React from 'react'
import { useState } from 'react'

function ParallaxTest() {
	const [background, setBackground] = useState(20)

	return (
		<div className="parallax-outer">
			<div className="parallax"></div>
		</div>
	)
}

export default ParallaxTest

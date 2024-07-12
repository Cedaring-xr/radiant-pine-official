import React from 'react'
import Image from 'next/image'

function Parallax() {
	return (
		<div id="parallax-container" className="w-full p-12 min-h-24 max-h-[600px]">
			<Image
				src="/images/greenCircuit.png"
				alt="circuit background"
				fill={true}
				priority
				className="mt-48"
			></Image>
		</div>
	)
}

export default Parallax

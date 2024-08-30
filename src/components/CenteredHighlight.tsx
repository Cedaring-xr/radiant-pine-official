import React from 'react'

type CenteredProps = {
	text: string
}

const CenteredHighlight: React.FC<CenteredProps> = ({ text }) => {
	return (
		<div className="flex justify-center mt-12 relative z-20 py-12 px-8 md:px-16">
			<div className="border-2 border-[#c524a8] rounded-3xl h-[180px] w-[96%] absolute -top-2 left-5"></div>
			<div className="border-2 border-[#c524a8] rounded-3xl h-[180px] w-[96%] absolute top-0 left-3"></div>
			<div className="border-2 border-[#c524a8] rounded-3xl h-[180px] w-[96%] absolute top-2 left-1"></div>
			<h1 className="serif-font text-white md:text-xl">{text}</h1>
		</div>
	)
}

export default CenteredHighlight

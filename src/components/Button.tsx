import React from 'react'
import Link from 'next/link'

type ButtonProps = {
	text: string
}

const Button: React.FC<ButtonProps> = ({ text }) => {
	return (
		<div id="button-wrapper" className="button-wrap-shadow">
			<div className="button-gradient button-clip button-shadow p-1">
				<div className="button-clip bg-[#f7f4fb] px-6 py-2 items-center flex hover:bg-[#121313] hover:text-[#c524a8]">
					<Link href="" className="text-2xl headline-font">
						{text}
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Button

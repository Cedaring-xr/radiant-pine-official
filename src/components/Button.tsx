import React from 'react'
import Link from 'next/link'
import { HiArrowCircleRight } from 'react-icons/hi'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { MdArrowRightAlt } from 'react-icons/md'

type ButtonProps = {
	text: string
	destination: string
	target?: string
}

const Button: React.FC<ButtonProps> = ({ text, destination, target }) => {
	return (
		<div id="button-wrapper" className="button-wrap-shadow">
			<div className="button-gradient button-clip button-shadow p-1">
				<Link href={destination} className="text-xl headline-font" target={target}>
					<div className="button-clip bg-[#e1e0e2] px-4 py-0 items-center flex hover:bg-[#121313] hover:text-[#89f7fe]">
						{text}
						<MdArrowRightAlt className="text-4xl ml-2" />
					</div>
				</Link>
			</div>
		</div>
	)
}

export default Button

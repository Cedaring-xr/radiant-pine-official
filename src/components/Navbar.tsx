import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {}

export default function Navbar({}: Props) {
	return (
		<nav className="header-gradient p-2 sticky top-0 drop-shadow-xl z-10 sans-font">
			<div className="md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row">
				<Image
					src="/images/RadiantPineLogo1.png"
					alt="LLC logo"
					width={50}
					height={30}
					priority
					className="mr-10 mb-0"
				/>

				<h1 className="text-3xl font-bold text-white grid place-content-center mb-2 md:mb-0">
					<Link href="/" className="text-white/90 no-underline hover:text-white">
						<span className="bold text-4xl text-emerald-400">Radiant Pine LLC</span>
					</Link>
				</h1>
				<div>
					<ul className="flex text-white justify-between w-[30%]">
						<li className="m-12">About</li>
						<li className="m-12">Work</li>
						<li className="m-12">Blog</li>
						<li className="m-12">Examples</li>
						<li className="m-12">FAQ</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

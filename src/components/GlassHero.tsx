'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap-trial/ScrollTrigger'

type GlassHeroProps = {
	text: string
}

const GlassHero: React.FC<GlassHeroProps> = ({ text }) => {
	return (
		<div
			id="glass-hero"
			className="w-[80%] md:w=[65%] lg:w-[50%] h-[250px] glass rounded-xl flex justify-center items-center translate-y-28"
		>
			<h1 className="headline-font text-4xl text-[#fff] ">{text}</h1>
		</div>
	)
}

export default GlassHero

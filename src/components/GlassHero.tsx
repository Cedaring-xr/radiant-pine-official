import React, { useEffect } from 'react'

type GlassHeroProps = {
	text: string
}

const GlassHero: React.FC<GlassHeroProps> = ({ text }) => {
	// useEffect(() => {
	//    let ctx = gsap.context(() => {
	//       gsap.registerPlugin(ScrollTrigger)
	//       var tl = gsap.timeline({
	//          defaults: { duration: 1 },
	//          scrollTrigger: {
	//             trigger: ParallaxBarrierEffect.current,
	//             start: "top top",
	//             end: "5000 bottom",
	//             scrub: true,
	//             pin: true,
	//             onUpdate: (self) => {
	//                setBackground(Math.ceil(self.progress * 100 + 200))
	//             }
	//          }
	//       })
	//    })
	// }, [])

	return (
		<div className="w-[80%] md:w=[65%] lg:w-[50%] h-[250px] glass rounded-xl flex justify-center items-center transform: translateZ(0)">
			<h1 className="headline-font text-4xl text-[#fff] ">{text}</h1>
		</div>
	)
}

export default GlassHero

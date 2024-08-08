'use client'

import { useEffect, useState } from 'react'
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import UseAnimations from 'react-useanimations'
import menu2 from 'react-useanimations/lib/menu2'

type SizeProps = {
	width: number
	height: number
}

const Header = () => {
	const [isSticky, setSticky] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [size, setSize] = useState<SizeProps>({ width: window.innerWidth, height: window.innerHeight })
	const breakpoint = 768

	const menuToggleOpen = () => {
		document.body.classList.toggle('header-menu-open')
		setMenuOpen((open) => !open)
	}

	const handleScroll = () => {
		const offset = window.scrollY

		if (offset > 180) {
			setSticky(true)
		} else {
			setSticky(false)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	useEffect(() => {
		const handleResize = () => {
			setSize({
				width: window.innerWidth,
				height: window.innerHeight
			})
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [size.width])

	const stickyHeader = isSticky && 'sticky bg-[#000101] transition ease-in-out duration-500 -mt-16 z-30'
	const stickyTitle = isSticky && 'mt-3 text-white text-2xl lg:text-[2.1rem]'
	const stickySubtitle = isSticky && 'hidden'
	const stickyNav = isSticky && 'mt-5'
	const stickyButton = isSticky && 'border-none'
	const stickyMobile = isSticky && '-mt-4 md:-mr-24'

	return (
		<div
			id="header-container"
			className={`transparent flex flex-row justify-between h-[60px] w-full sans-font absolute top-0 ${stickyHeader}`}
		>
			<div className="min-w-[250px]">
				<a href="/">
					<h1
						className={`text-2xl md:text-3xl lg:text-5xl headline-font text-black mt-12 ml-6 ${stickyTitle}`}
					>
						Radiant Pine LLC
					</h1>
					<h4
						className={`text-black text-sm w-2/3 md:w-full lg:text-base mx-6 mt-2 serif-font ${stickySubtitle}`}
					>
						Website consultant & developer
					</h4>
				</a>
			</div>
			<nav className={`my-16 md:mr-24 lg:mr-24 xl:mr-48 z-100 ${stickyNav}`}>
				{size.width < breakpoint ? (
					<>
						<HiMenu className={`text-5xl pink-accent ${stickyMobile}`} onClick={menuToggleOpen} />
						{menuOpen && (
							<div className="fixed bg-[#3d3d3d] text-white w-screen left-0 top-0 h-screen pt-2 z-100">
								<a href="/">
									<h1 className={`text-2xl text-white headline-font`}>Radiant Pine LLC</h1>
								</a>
								<ul className="flex flex-col justify-center items-center text-4xl gap-6">
									<li>
										<AiOutlineClose
											onClick={menuToggleOpen}
											className="absolute right-10 hover:text-[#c524a8]"
										/>
									</li>
									<li className="hover:text-pink-600">
										<button>
											<a href="/about" className="">
												about
											</a>
										</button>
									</li>
									<li className="hover:text-pink-600">
										<button>
											<a href="/services" className="">
												Services
											</a>
										</button>
									</li>
									<li className="hover:text-pink-600">
										<button>
											<a href="/examples" rel="noreferrer" className="">
												Examples
											</a>
										</button>
									</li>
									<li className="hover:text-pink-600">
										<button>
											<a href="/blog" rel="noreferrer" className="">
												Blog
											</a>
										</button>
									</li>
								</ul>
							</div>
						)}
					</>
				) : (
					<ul className="flex flex-row gap-4 lg:gap-10 text-pink-600">
						<li>
							<button className={`border-b-2 border-black ${stickyButton}`}>
								<a
									href="/about"
									className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900"
								>
									About
								</a>
							</button>
						</li>
						<li>
							<button className={`border-b-2 border-black ${stickyButton}`}>
								<a
									href="/servies"
									className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900"
								>
									Services
								</a>
							</button>
						</li>
						<li>
							<button className={`border-b-2 border-black ${stickyButton}`}>
								<a
									href="/examples"
									rel="noreferrer"
									className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900"
								>
									Examples
								</a>
							</button>
						</li>
						<li>
							<button className={`border-b-2 border-black ${stickyButton}`}>
								<a
									href="/blog"
									rel="noreferrer"
									className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900"
								>
									Blog
								</a>
							</button>
						</li>
						<li>
							<button className={`border-b-2 border-black ${stickyButton}`}>
								<a
									href="/faq"
									rel="noreferrer"
									className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900"
								>
									FAQ
								</a>
							</button>
						</li>
					</ul>
				)}
			</nav>
		</div>
	)
}

export default Header

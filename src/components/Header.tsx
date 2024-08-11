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

	const stickyHeader = isSticky && 'sticky bg-[#000101] transition ease-in-out duration-500 -mt-16 z-30 bg-opacity-90'
	const stickyTitle = isSticky && 'text-white text-2xl lg:text-[2.1rem] mt-1 pt-0'
	const stickySubtitle = isSticky && 'hidden'
	const stickyNav = isSticky && 'mt-1'
	const stickyButton = isSticky && 'border-none'
	const stickyMobile = isSticky && 'md:-mr-24'

	return (
		<div
			id="header-container"
			className={`transparent flex flex-row z-30 justify-between h-[60px] w-full sans-font absolute top-0 ${stickyHeader}`}
		>
			<div className="min-w-[250px]">
				<a href="/">
					<h1
						className={`text-2xl sm:text-3xl md:text-3xl lg:text-5xl headline-font text-white mt-8 ml-6 ${stickyTitle}`}
					>
						Radiant Pine LLC
					</h1>
					<h4
						className={`text-white serif-font w-2/3 md:w-full lg:text-base mx-6 mt-2 serif-font ${stickySubtitle}`}
					>
						Website consultant & developer
					</h4>
				</a>
			</div>
			<nav className={`mb-16 mt-6 md:mr-24 lg:mr-24 xl:mr-48 z-100 ${stickyNav}`}>
				{size.width < breakpoint ? (
					<>
						<HiMenu className={`text-5xl pink-accent ${stickyMobile}`} onClick={menuToggleOpen} />
						{menuOpen && (
							<div className="fixed bg-[#3d3d3d] text-white w-screen left-0 top-0 h-screen pt-2 z-100">
								<a href="/">
									<h1 className={`text-3xl text-[#89f7fe] headline-font`}>Radiant Pine LLC</h1>
								</a>
								<ul className="flex flex-col justify-center items-center text-4xl gap-8 mt-8">
									<li>
										<AiOutlineClose
											onClick={menuToggleOpen}
											className="absolute right-10 hover:text-[#c524a8]"
										/>
									</li>
									<li className="hover:text-[#c524a8]">
										<button>
											<a href="/about" className="">
												About
											</a>
										</button>
									</li>
									<li className="hover:text-[#c524a8]">
										<button>
											<a href="/services" className="">
												Services
											</a>
										</button>
									</li>
									<li className="hover:text-[#c524a8]">
										<button>
											<a href="/examples" rel="noreferrer" className="">
												Examples
											</a>
										</button>
									</li>
									<li className="hover:text-[#c524a8]">
										<button>
											<a href="/blog" rel="noreferrer" className="">
												Blog
											</a>
										</button>
									</li>
									<li className="hover:text-[#c524a8]">
										<button>
											<a href="/faq" rel="noreferrer" className="">
												F.A.Q.
											</a>
										</button>
									</li>
								</ul>
							</div>
						)}
					</>
				) : (
					<ul className="flex flex-row gap-4 lg:gap-10 z-100 text-[#c524a8] serif-font">
						<li>
							<button className={`${stickyButton}`}>
								<a
									href="/about"
									className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
								>
									About
								</a>
							</button>
						</li>
						<li>
							<button className={` ${stickyButton}`}>
								<a
									href="/servies"
									className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
								>
									Services
								</a>
							</button>
						</li>
						<li>
							<button className={`${stickyButton}`}>
								<a
									href="/examples"
									rel="noreferrer"
									className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
								>
									Examples
								</a>
							</button>
						</li>
						<li>
							<button className={` ${stickyButton}`}>
								<a
									href="/blog"
									rel="noreferrer"
									className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
								>
									Blog
								</a>
							</button>
						</li>
						<li>
							<button className={` ${stickyButton}`}>
								<a
									href="/faq"
									rel="noreferrer"
									className="text-xl md:text-2xl lg:text-3xl font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
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

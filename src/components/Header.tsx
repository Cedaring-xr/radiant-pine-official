'use client'

import { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { HiMenu } from 'react-icons/hi'
import Link from 'next/link'

type SizeProps = {
	width: number
	height: number
}

const Header = () => {
	const [isSticky, setSticky] = useState(false)
	const [menuOpen, setMenuOpen] = useState(false)
	const [width, setWidth] = useState(0)
	const [height, setHeight] = useState(0)
	const [size, setSize] = useState<SizeProps>({ width: 0, height: 0 })
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

	const handleWindowResize = () => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
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

	const stickyHeader =
		isSticky && 'sticky bg-[#000101] transition ease-in-out duration-500 z-30 bg-opacity-90 main-box-shadow'
	const stickyTitle = isSticky && 'text-white text-2xl lg:text-[2.1rem] -mt-[6px] pt-0'
	const stickySubtitle = isSticky && 'hidden'
	const stickyNav = isSticky && 'mt-0'
	const stickyButton = isSticky && 'border-none'
	const stickyMobile = isSticky && 'md:-mr-24'

	return (
		<div
			id="header-container"
			className={`transparent flex flex-row z-50 justify-between h-[60px] w-full sans-font absolute top-0 ${stickyHeader}`}
		>
			<div className="min-w-[250px] flex items-center">
				<Link href="/">
					<h1
						className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl headline-font text-white mt-8 ml-6 ${stickyTitle}`}
					>
						Radiant Pine LLC
					</h1>
					<h4
						className={`text-white serif-font w-2/3 md:w-full lg:text-base mx-6 mt-2 serif-font ${stickySubtitle}`}
					>
						Website consultant & developer
					</h4>
				</Link>
			</div>
			<nav className={`mb-16 mt-6 md:mr-24 lg:mr-24 xl:mr-48 z-100 ${stickyNav}`}>
				{size.width < breakpoint ? (
					<>
						<HiMenu className={`text-5xl pink-accent ${stickyMobile}`} onClick={menuToggleOpen} />
						{menuOpen && (
							<div className="relative z-50">
								<div
									className="fixed text-white w-screen left-0 top-0 h-screen pt-2 z-100 bg-cover"
									style={{ backgroundImage: `url(${'/images/mobileBackground.png'})` }}
								>
									<h1 className={`text-3xl text-[#89f7fe] headline-font ml-2 max-w-[400px]`}>
										<Link href="/">Radiant Pine LLC</Link>
									</h1>
									<ul className="flex flex-col justify-center items-center text-4xl gap-8 mt-8  headline-font">
										<li>
											<AiOutlineClose
												onClick={menuToggleOpen}
												className="absolute right-10 hover:text-[#c524a8]"
											/>
										</li>
										<li className="hover:text-[#c524a8] mt-12">
											<button>
												<Link href="/about">About</Link>
											</button>
										</li>
										<li className="hover:text-[#c524a8]">
											<button>
												<Link href="/services">Services</Link>
											</button>
										</li>
										<li className="hover:text-[#c524a8]">
											<button>
												<Link href="/examples">Examples</Link>
											</button>
										</li>
										<li className="hover:text-[#c524a8]">
											<button>
												<Link
													href="https://www.radiantpine-devblog.com/"
													target="blank"
													rel="noreferrer"
												>
													Blog
												</Link>
											</button>
										</li>
										<li className="hover:text-[#c524a8]">
											<button>
												<Link href="/faq">F.A.Q.</Link>
											</button>
										</li>
									</ul>
								</div>
							</div>
						)}
					</>
				) : (
					<ul className="flex flex-row gap-4 lg:gap-10 z-100 text-[#c524a8] serif-font">
						<li>
							<button className={`${stickyButton}`}>
								<a
									href="/about"
									className="text-xl  font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
								>
									About
								</a>
							</button>
						</li>
						<li>
							<button className={` ${stickyButton}`}>
								<a
									href="/services"
									className="text-xl  font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
								>
									Services
								</a>
							</button>
						</li>
						<li>
							<button className={`${stickyButton}`}>
								<a
									href="/examples"
									className="text-xl  font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
								>
									Examples
								</a>
							</button>
						</li>
						<li>
							<button className={` ${stickyButton}`}>
								<a
									href="https://www.radiantpine-devblog.com/"
									rel="noreferrer"
									target="_blank"
									className="text-xl  font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
								>
									Blog
								</a>
							</button>
						</li>
						<li>
							<button className={` ${stickyButton}`}>
								<a
									href="/faq"
									className="text-xl  font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
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

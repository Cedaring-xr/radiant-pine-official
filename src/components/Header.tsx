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
	const [size, setSize] = useState<SizeProps>({ width: 400, height: 800 })
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
		handleResize()
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [size.width])

	const stickyHeader =
		isSticky && 'sticky top-[0px] bg-[#000101] transition ease-in-out z-30 bg-opacity-90 main-box-shadow'
	const stickyTitle = isSticky && 'text-2xl lg:text-[2.1rem] pt-0'
	const stickySubtitle = isSticky && 'hidden'
	const stickyNav = isSticky && 'mt-0'
	const stickyMobile = isSticky && ''

	return (
		<div
			id="header-container"
			className={`transparent flex flex-row z-50 justify-between h-[60px] w-full sans-font relative bottom-[-60px]  ${stickyHeader}`}
		>
			<div className="min-w-[250px] flex items-center pt-2">
				<Link href="/">
					<h1
						className={`text-2xl sm:text-3xl md:text-3xl lg:text-4xl headline-font text-white mt-4 ml-6 ${stickyTitle}`}
					>
						Radiant Pine LLC
					</h1>
					<h2
						className={`text-white serif-font w-4/5 md:w-full lg:text-base mx-6 mt-2 serif-font ${stickySubtitle}`}
					>
						Freelance Web Development
					</h2>
				</Link>
			</div>
			<nav className={`mb-16 mt-2 md:mr-16 lg:mr-24 xl:mr-48 z-100 max-w-[1800px] ${stickyNav}`}>
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
										<Link href="/" onClick={menuToggleOpen}>
											Radiant Pine LLC
										</Link>
									</h1>
									<ul className="flex flex-col justify-center items-center text-4xl gap-8 mt-8  headline-font">
										<li>
											<AiOutlineClose
												onClick={menuToggleOpen}
												className="absolute right-10 hover:text-[#c524a8]"
											/>
										</li>
										<li className="hover:text-[#c524a8] mt-12">
											<button onClick={menuToggleOpen}>
												<Link href="/about">About</Link>
											</button>
										</li>
										<li className="hover:text-[#c524a8]">
											<button onClick={menuToggleOpen}>
												<Link href="/services">Services</Link>
											</button>
										</li>
										<li className="hover:text-[#c524a8]">
											<button onClick={menuToggleOpen}>
												<Link href="/examples">Examples</Link>
											</button>
										</li>
										<li className="hover:text-[#c524a8]">
											<button onClick={menuToggleOpen}>
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
											<button onClick={menuToggleOpen}>
												<Link href="/faq">F.A.Q.</Link>
											</button>
										</li>
									</ul>
								</div>
							</div>
						)}
					</>
				) : (
					<ul className="flex flex-row gap-4 lg:gap-10 z-100 text-[#f03ccf] serif-font mt-2">
						<li>
							<Link
								href="/about"
								className="text-xl  font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/services"
								className="text-xl  font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								href="/examples"
								className="text-xl  font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
							>
								Examples
							</Link>
						</li>
						<li>
							<a
								href="https://www.radiantpine-devblog.com/"
								rel="noreferrer"
								target="_blank"
								className="text-xl  font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
							>
								Blog
							</a>
						</li>
						<li>
							<Link
								href="/faq"
								className="text-xl  font-sans font-bold uppercase decoration-zinc-900 hover:text-white"
							>
								FAQ
							</Link>
						</li>
					</ul>
				)}
			</nav>
		</div>
	)
}

export default Header

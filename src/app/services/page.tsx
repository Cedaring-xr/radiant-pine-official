/* eslint-disable react/no-unescaped-entities */
import GlassHero from '@/components/GlassHero'
import SideSectionLeft from '@/components/SideSectionLeft'
import SideSectionRight from '@/components/SideSectionRight'
import TextBox from '@/components/TextBox'
import React from 'react'
import Button from '@/components/Button'
import Image from 'next/image'
import CenteredHighlight from '@/components/CenteredHighlight'

function Services() {
	return (
		<div id="about-mainContainer" className="bg-[#0b0d15]">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/16.png'})` }}
				className="bg-no-repeat bg-cover bg-fixed"
			>
				<div className="h-[800px] flex justify-center items-center">
					<GlassHero text="SERVICES"></GlassHero>
				</div>
			</div>
			<div className="flex justify-center">
				<CenteredHighlight text="*pricing varies based on the project and time effort. I usually charge in the range of $35/hr"></CenteredHighlight>
			</div>
			<div className="pt-48 text-white">
				<div id="testing-section" className="w-full flex justify-center mb-16">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[400px]">
						Website Testing
					</h3>
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="scale-x-[-1]" />
				</div>
				<div className="flex flex-col lg:flex-row md:flex-row justify-between lg:px-12">
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Website Audit</h3>
						<p>
							A detailed breakdown document on what bugs, UI/UX issues, or navigation issues you may have
							with your website. Testing across multiple browsers, screen sizes, and devices. If you have
							only viewed your website on 1 computer or phone then you might not know if it looks bad on
							other devices. Identifying potential pain points helps to avoid negative impressions on your
							business.
						</p>
					</div>
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Performance Testing</h3>
						<p>
							How does your website function under a slower connection? What order does content load in to
							the page? Do any background videos load in a acceptable timeframe? Performance testing
							identifies any issues with content loading, ensuring your customers have a smooth and
							enjoyable experience navigating content on your website.
						</p>
					</div>
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Accessibility Audit</h3>
						<p>
							ADA (American Disability Act) applies to online businesses as well. Website that are public
							services or stores that are not accessible could be sugest to lawsuits.
						</p>
					</div>
				</div>
				<div className="w-full h-[200px]"></div>
				<div id="updates-section" className="w-full flex justify-center">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[600px]">
						Updates, Improvements, Rework
					</h3>
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="scale-x-[-1]" />
				</div>
				<div className="flex flex-col lg:flex-row md:flex-row justify-between lg:px-12">
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Content updates</h3>
						<p>
							Need some new pictures, sections, or pages on your website? Haven't changed anything in
							years because you don't want to break something. Having someone with a broad web development
							background make it easier to make changes with peace of mind.
						</p>
					</div>
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Plugin Updates</h3>
						<p>
							WordPress websites need to be updated on a semi-frequent basis. Long outdated plugins can
							break features and be a vector for cyber attacks. Often times updating plugins is simple and
							easy. Sometimes it requires a deeper knowledge about what systems are effected and how to
							recover if updates break.
						</p>
					</div>
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Changing themes or structure</h3>
						<p>
							Many CMS platforms work off a theme framework that sets defaults for the website. Changing
							themes can often mean having to make lots of little content adjustments to match the new
							theme. Websites that have major structural changes should also be throughly tested again to
							ensure that everything matchs up well.
						</p>
					</div>
				</div>
				<div className="w-full h-[200px]"></div>
				<div id="guidance-section" className="w-full flex justify-center">
					<Image src="/images/circuitSVGsmall.png" alt="" width={264} height={34} className="py-2" />
					<h3 className="text-white text-center pt-1 headline-font text-2xl md:text-3xl w-[600px]">
						Guidance on settting up a website
					</h3>
					<Image
						src="/images/circuitSVGsmall.png"
						alt=""
						width={264}
						height={34}
						className="scale-x-[-1] py-2"
					/>
				</div>
				<div className="flex flex-col lg:flex-row md:flex-row justify-between lg:px-12">
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Info static websites</h3>
						<p>
							Most personal and small business websites provide content about who they are and what they
							do. Often with links to contact them and reviews. This is considered a static website.
							Static sites are easier to setup and manage.
						</p>
					</div>
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Store or service Website</h3>
						<p>
							Websites that sell products or services are more complex than static websites. The more
							moving parts, the more complicated it gets. Many CMS services provide a good framework
						</p>
					</div>
					<div className="column-item lg:px-8">
						<h3 className="headline-font text-2xl text-cyan-400 py-4">Hosting and domain names</h3>
						<p>
							Website hosting options can become confusing when integrating different services. Deciding
							on what how to host a website can be the difference between paying $75/mo and $15/mo.
						</p>
						<div className="w-[130px] text-black relative float-end mr-24 mt-6">
							<Button text="View" destination="/services"></Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services

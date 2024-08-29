import GlassHero from '@/components/GlassHero'
import SideSectionLeft from '@/components/SideSectionLeft'
import SideSectionRight from '@/components/SideSectionRight'
import TextBox from '@/components/TextBox'
import React from 'react'

function Services() {
	return (
		<div id="about-mainContainer" className="bg-[#0b0d15]">
			<div
				id="bottomImage"
				style={{ backgroundImage: `url(${'/images/16.png'})` }}
				className="bg-no-repeat bg-contain bg-fixed"
			>
				<div className="h-[800px] flex justify-center items-center">
					<GlassHero text="SERVICES"></GlassHero>
				</div>
			</div>
			<div className="pt-24 text-white">
				<SideSectionLeft text="In-depth website testing, bug investigations, functionality audit"></SideSectionLeft>
				<div className="w-[60%] bg-stone-300 text-black serif-font pt-16 -translate-y-10 px-6 pb-12 rounded-xl font-serif">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, expedita esse. Obcaecati
						itaque ea quam, architecto velit amet dolorum dignissimos?
					</p>
				</div>

				<SideSectionRight text="hello"></SideSectionRight>
				<SideSectionLeft text="hello"></SideSectionLeft>
				<SideSectionRight text="hello"></SideSectionRight>
			</div>
			<div className="text-white">
				<h2>Services that I offer</h2>
				<div>
					<ul>
						<li>
							<h4>Website testing and audits</h4>
							<p>
								Want to figure out where your website is weak or broken. Want to identify areas of
								improvement? Then having a competent and qualified tester can help you out. 95% of web
								designers will not properly test the websites that they build. In most cases they do not
								even know how to properly test a website.
							</p>
						</li>
						<li>
							<h4>Website monitoring for outages</h4>
						</li>
						<li>
							<h4>SEO understanding and improvements</h4>
							<p>SEO (Search Engine Optimization) is the </p>
						</li>
						<li>
							<h4>ADA accessibility testing and guidance</h4>
							<p>ADA is the American Disabilities Act</p>
						</li>
						<li>
							<h4>Website performance and responsive audits</h4>
							<p>Want to</p>
						</li>
						<li>
							<h4>Website migrations</h4>
							<p>Want</p>
						</li>
						<li>
							<h4>Hosting and CMS guidance and troubleshooting</h4>
							<p>Want</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Services

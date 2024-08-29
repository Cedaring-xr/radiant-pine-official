import SideSectionLeft from '@/components/SideSectionLeft'
import SideSectionRight from '@/components/SideSectionRight'
import React from 'react'

function FAQpage() {
	return (
		<div id="faq-container" className="bg-[#0b0d15]">
			<div id="bottomImage" style={{ backgroundImage: `url(${'/images/8.png'})` }} className="bg-cover bg-fixed">
				<div className="h-[800px] flex justify-center items-center">
					<div className="w-[30%] h-[200px] glass rounded-xl flex justify-center items-center">
						<h1 className="headline-font text-4xl blue ">Frequently Asked Questions</h1>
					</div>
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
			<div>
				<h2>Categories</h2>
			</div>
			<h3>New website creation</h3>
			<ul>
				<li className="question">
					<h4>What is a CMS?</h4>
				</li>
				<li className="question">
					<h4>How much should you be paying for a new website?</h4>
				</li>
				<li className="question">
					<h4>Should you hire a designer/developer to build your website?</h4>
				</li>
			</ul>
			<h3>Improving current website</h3>
			<ul>
				<li className="question">
					<h4>How to assess if your website needs updates or improvements</h4>
				</li>
				<li className="question">
					<h4></h4>
				</li>
				<li className="question">
					<h4>What is SEO?</h4>
				</li>
				<li className="question">
					<h4>Should you manage and update your website by yourself?</h4>
				</li>
			</ul>
			<h3>Migrating a website</h3>
			<ul>
				<li className="question">
					<h4>How to avoid vendor lock-in</h4>
				</li>
			</ul>
		</div>
	)
}

export default FAQpage

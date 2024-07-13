import React from 'react'

function FAQpage() {
	return (
		<div id="faq-container">
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
					<h4>How does SEO work?</h4>
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

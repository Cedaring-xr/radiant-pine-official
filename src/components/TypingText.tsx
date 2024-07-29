import React from 'react'

type Props = {}

// state is self-contained
// props being passed down are the multiple text strings that are dynamic

export default function TypingText({}: Props) {
	return (
		<div id="typing-box">
			<h2>Helping businesses</h2>
			<span>understand their online presense</span>
			<span>improve their website</span>
			<span>make a better first impression</span>
			<span>streamline online user experiences</span>
			<span>feel confident in their website branding</span>
		</div>
	)
}

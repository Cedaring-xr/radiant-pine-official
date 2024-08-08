import React from 'react'

type TextboxProps = {
	text: string
}

const TextBox: React.FC<TextboxProps> = ({ text }) => {
	return (
		<div>
			<div>{text}</div>
		</div>
	)
}

export default TextBox

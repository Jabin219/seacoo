import React from 'react'

interface Props {
	width: string
	height: string
	id: string
}

const Card = ({ width, height, id }: Props) => {
	return (
		<div
			id={id}
			style={{
				width: width,
				height: height,
				backgroundColor: 'white',
				borderRadius: 10,
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center'
			}}
		/>
	)
}

export default Card

import { Typography } from '@material-ui/core'
import React from 'react'

const BecheDirection = () => {
	return (
		<div>
			<Typography
				style={{
					fontSize: 14,
					letterSpacing: 0.18,
					lineHeight: '18px',
					maxWidth: 600,
					margin: '0 auto'
				}}
			>
				<Typography style={{ fontWeight: 'bold' }}>Storage Tips:</Typography>
				Bêche is an all-natural, highly absorbable fine powder with no
				additives, preservatives, or chemical fillers. For best quality
				retention it is recommended to keep refrigerated, leave the silica
				packet in the bottle, close the lid tightly after use, and consume
				within 60 days of opening.
			</Typography>
		</div>
	)
}
export default BecheDirection

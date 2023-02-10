import React from 'react'
import Icon from '@mdi/react'

const Arrow = (props: any) => {
	const { onClickHandler, label, path, direction } = props
	return (
		<div onClick={onClickHandler} title={label}>
			<Icon
				path={path}
				title={label}
				size={5}
				color='white'
				style={
					direction === 'left'
						? {
								position: 'absolute',
								zIndex: 2,
								top: '40%',
								width: 30,
								height: 30,
								cursor: 'pointer',
								left: 15
						  }
						: {
								position: 'absolute',
								zIndex: 2,
								top: '40%',
								width: 30,
								height: 30,
								cursor: 'pointer',
								right: 15
						  }
				}
			/>
		</div>
	)
}

export default Arrow

import React from 'react'
import { HashLink } from 'react-router-hash-link'
import { Grid, Typography } from '@material-ui/core'

export default function HomeContact() {
	return (
		<div className='home-contact'>
			<Grid container>
				<Grid item xs className='home-contact-left'>
					<img
						src='/images/home/Dry sea cucumber packing.png'
						alt='Dry sea cucumber packing'
					/>
				</Grid>
				<Grid item xs className='home-contact-right'>
					<Typography variant='h5'>通过CFIA认证的加工厂</Typography>
					<Typography variant='body2' className='text'>
						哈利法克斯（Halifax）和温哥华（Vancouver）的两个加工厂每年均加工总计600万磅的加拿大海参，并且拥有经过CFIA认证的专业质量管控团队。
					</Typography>
					<Typography variant='body2'>对批发或者代工需求感兴趣？</Typography>
					<HashLink to='/contact/#'>联系我们</HashLink>
				</Grid>
			</Grid>
		</div>
	)
}

import { Typography } from '@material-ui/core'
import React from 'react'

const DumplingDirection = () => {
	return (
		<div style={{ maxWidth: 600, margin: '0 auto' }}>
			<Typography variant='h4' style={{ marginBottom: 20 }}>
				推荐食用方法：
			</Typography>
			<Typography variant='body2' style={{ marginBottom: 10, fontSize: 20 }}>
				<span style={{ fontWeight: 700 }}>煮：</span>
				无需解冻，锅内加入适量水，水开后将水饺放入，用汤勺推动水饺防止粘锅，待水饺浮起后加入少量凉水，水开后再加入凉水，再次水开后打开锅盖即可。
			</Typography>
			<Typography variant='body2' style={{ marginBottom: 10, fontSize: 20 }}>
				<span style={{ fontWeight: 700 }}>蒸：</span>
				无需解冻，将水饺放入蒸屉或电饭锅，蒸15分钟左右即可。
			</Typography>
			<Typography variant='body2' style={{ marginBottom: 10, fontSize: 20 }}>
				<span style={{ fontWeight: 700 }}>煎：</span>
				无需解冻，将平底锅加热并加入适量油，油热后将水饺放入平底锅，添加少量水并加盖，用小火慢煎，饺子底部呈金黄色即可。
			</Typography>
		</div>
	)
}

export default DumplingDirection

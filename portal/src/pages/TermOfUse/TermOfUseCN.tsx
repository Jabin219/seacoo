import React from 'react'
import { useStyles } from './style'
import { Typography } from '@material-ui/core'

const TermOfUseCN = () => {
	const classes = useStyles()
	return (
		<div className={classes.termOfUse}>
			<div>
				<Typography className='title' variant='h4'>
					使用条款
				</Typography>
			</div>
			<div className='main-body'>
				<Typography variant='h6' className='subtitle'>
					接受这些网站标准条款和条件
				</Typography>
				<Typography>
					请仔细阅读Seacoo网站的通用条款和条件（以下内容将简称为“条款”或“网站条款和条件”）的条款。如果您不接受这些条款，请不要使用本网站。这些条款和条件用于告知网站访问者，以及任何决定使用我们的服务的用户，Seacoo网站将拥有对网站任何信息的收集，使用和共享的所有权。
					<br />
					如果继续使用本网站，表示您已接受seacoo网站制定的条款和条件。
				</Typography>
				<br />
				<br />
				<Typography variant='h6' className='subtitle'>
					受限制的用户行为
				</Typography>
				<Typography>
					你同意，如若您违反以下的规定，您将被禁止使用本网站服务：
				</Typography>
				<Typography style={{ maxWidth: '95%', margin: '0 auto' }}>
					<br />
					A. 出于任何非法目的；
					<br />
					<br />
					B.
					上传，发布或以其他方式传播任何淫秽，亵渎，色情，非法，带有威胁，侮辱性，对社会有害，侵犯隐私权或宣传权，诽谤，粗俗，非法或其他令人不安的形式材料。
					<br />
					<br />
					C.
					上传，发布或以其他方式传输任何侵犯任何第三方的任何版权，商标，专利或其他知识产权或任何精神权利或用户权利的材料，包括但不限于Seacoo，或散发受版权保护的内容或非法内容；
					<br />
					<br />
					D.
					以任何方式伤害未成年人，包括但不限于上载，张贴或以其他方式传播违反儿童色情法，儿童性剥削法，或诱导逼迫未成年人从事性行为或提交有关任何13岁以下儿童的可识别信息；
					<br />
					<br />
					E. 伪造标题或操纵标识符以掩盖通过服务传输的任何内容的来源；
					<br />
					<br />
					F.
					上传，发布或以其他方式传输可能对Seacoo网站，或任何其他人的计算机系统造成伤害的任何资料，包括但不限于包含任何旨在破坏这些资料的病毒，代码，蠕虫，数据或其他文件或程序的资料，或允许未经授权访问服务，这可能导致网站服务的任何缺失，错误，故障或损坏；
					<br />
					<br />
					G. 禁止用于任何商业目的，除非这些条款明确允许；
					<br />
					<br />
					H.
					出售其在任何其他网站上的访问权，或在另一个网站上使用该服务以获得广告或订阅收入，但个人博客或社交网络除外。其主要目的是应通过超链接展示来自Seacoo的内容，而不是与Seacoo作商业竞争。
				</Typography>
				<br />
				<br />
				<br />
				<Typography className='subtitle'>许可证和站点访问</Typography>
				<Typography>
					我们授予您访问和个人使用本网站的有限许可。您无权下载或修改它，除非获得我们的书面同意。
				</Typography>
				<br />
				<br />
				<Typography className='subtitle'>用户帐号</Typography>
				<Typography>
					如果您是此网站上帐户的所有者，则您有责任对私人用户详细信息（用户名和密码）保密。您应对使用您的帐户或密码进行的所有活动负责。我们保留自行决定终止帐户，编辑或删除内容以及取消订单的所有权利。
				</Typography>
				<br />
				<br />
				<Typography className='subtitle'>条款更新</Typography>
				<Typography>
					我们可能会不时更新这些条款。如果我们认为更改很重要，我们会通过在线服务发布更改和/或向您发送电子邮件或消息以进行通知，以告知您。这样，您可以决定是否要继续接受使用该网站。除非另有说明，否则更改将在发布更改后生效。您有责任检查并熟悉所有更改。更改后您继续使用我们的服务即表示接受了这些新的条款。
				</Typography>
				<br />
				<br />
				<Typography className='subtitle'>知识产权</Typography>
				<Typography>
					根据本条款，除了您可能选择在本网站上包含的内容之外，[Seacoo]和/或其许可方拥有对本网站所含知识产权和材料的所有权利，并且保留所有此类权利。为了查看本网站上包含的资料，仅在遵守本条款规定的限制的前提下，才授予您有限许可。
				</Typography>
				<br />
				<br />
				<Typography className='subtitle'>版权</Typography>
				<Typography>
					本网站上发布的内容（数字下载，图像，文本，图形，徽标）是Seacoo和/或其内容创作者的财产，并受国际版权法保护。本网站上所有内容的完整汇编是Seacoo的专有财产，Seacoo对此著作拥有版权。
				</Typography>
				<br />
				<br />
				<Typography className='subtitle'>责任范围</Typography>
				<Typography>
					在任何情况下，Seacoo公司或其任何高级管理人员，董事和雇员均不会对您因使用本网站而产生的，或与之相关的任何行为承担任何责任，无论此类责任是合同形式的，侵权或其他方式的。Seacoo公司，包括其高级管理人员，董事和员工，将对因您使用本网站，或以任何方式与您使用本网站有关而引起的任何直接，间接或特殊的法律责任概不负责。
				</Typography>
			</div>
		</div>
	)
}

export default TermOfUseCN

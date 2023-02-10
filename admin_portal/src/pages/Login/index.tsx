import React, { useReducer, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Grid, Button, TextField } from '@material-ui/core'
import { LoginRequestData } from 'models'
import { loginRequest, setToken } from 'api'
import { NotificationContext } from 'context/NotificationContext'

const Login = () => {
	const { displayNotification } = useContext(NotificationContext)
	const { register, handleSubmit, errors } = useForm()
	const initialLoginInfo: LoginRequestData = {
		userName: '',
		password: ''
	}
	const [formState, dispatch] = useReducer(
		(formState: LoginRequestData, action: any) => {
			return { ...formState, [action.field]: action.payload }
		},
		initialLoginInfo
	)
	const handleChange =
		(fieldName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
			dispatch({
				field: fieldName,
				payload:
					fieldName === 'stayLogin' ? event.target.checked : event.target.value
			})
		}

	const onSubmit = async () => {
		const result = await loginRequest(formState)
		if (result.data.status === 'success') {
			const tokenString = result.data.token
			setToken(tokenString)
			localStorage.setItem('token', tokenString)
			window.location.reload()
		} else {
			if (result.data.status === 'error') {
				displayNotification('请输入用户名和密码', 'error')
			} else if (
				result.data.status === 'Unauthorized' ||
				result.data.status === 'notFound'
			) {
				displayNotification('您输入的用户名或密码错误，请重试', 'error')
			} else {
				displayNotification('系统错误，请稍后再试', 'error')
			}
		}
	}

	return (
		<>
			<Grid
				id='login'
				style={{
					width: '100%',
					height: '100vh',
					minHeight: 1024,
					background:
						'linear-gradient(180deg, rgba(40,67,94,0.61) 0%, #333333 100%)',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center'
				}}
			>
				<img
					alt='logo'
					src='/images/logo/logo.png'
					style={{ width: 340, height: 68, margin: '225px auto 36px auto' }}
				/>
				<form
					onSubmit={handleSubmit(onSubmit)}
					style={{
						width: 560,
						height: 440,
						backgroundColor: 'white',
						borderRadius: 4
					}}
				>
					<Grid
						item
						xs={9}
						style={{
							margin: '85px auto 48px auto',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center'
						}}
					>
						<TextField
							required
							fullWidth
							name='userName'
							label='账号/邮箱'
							variant='filled'
							error={!!errors.account}
							inputRef={register}
							onChange={handleChange('userName')}
							style={{ backgroundColor: 'white', marginBottom: '34px' }}
						/>
						<TextField
							required
							fullWidth
							name='password'
							label='密码'
							variant='filled'
							type='password'
							error={!!errors.password}
							inputRef={register}
							onChange={handleChange('password')}
							style={{ backgroundColor: 'white', marginBottom: '79px' }}
						/>

						<Button
							color='primary'
							variant='contained'
							type='submit'
							style={{
								height: 42,
								width: 200,
								color: 'white',
								fontWeight: 600,
								fontSize: 15,
								lineHeight: '26px',
								letterSpacing: '0.43px'
							}}
						>
							登陆
						</Button>
					</Grid>
				</form>
			</Grid>
		</>
	)
}

export default Login

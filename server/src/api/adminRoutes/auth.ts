import { Router, Request, Response } from 'express'
const route = Router()
import query from '../../services/db'
import { setToken } from '../../services/token'
import { ADMIN_LOGIN_QUERIES } from '../../services/queries'
import { RESPONSE_MESSAGE } from '../../constant'
import { LoginRequestData } from '../../models'
import passwordHash from 'password-hash'

export default (app: Router) => {
	app.use('/admin', route)

	route.post('/auth', async (req: Request, res: Response) => {
		const loginRequestData: LoginRequestData = req.body
		try {
			const loginRequestResult = await query(
				ADMIN_LOGIN_QUERIES.GET_ACCOUNT_INFO,
				[loginRequestData.userName]
			)
			if (loginRequestResult.count === 0) {
				res.status(200).json({
					status: RESPONSE_MESSAGE.NOT_FOUND,
					message: 'username does not exist'
				})
			} else {
				const hashedPassword = loginRequestResult.data[0].hashedPassword
				if (!passwordHash.verify(loginRequestData.password, hashedPassword)) {
					res.status(200).json({
						status: RESPONSE_MESSAGE.UNAUTHORIZED,
						message: 'wrong password'
					})
				} else {
					const token = setToken(loginRequestResult.data[0].id)
					res.status(200).json({
						token: token,
						status: RESPONSE_MESSAGE.SUCCESS,
						message: 'login success'
					})
				}
			}
		} catch (error) {
			console.error(error)
			res.status(200).json({
				status: RESPONSE_MESSAGE.NOT_FOUND
			})
		}
	})
}

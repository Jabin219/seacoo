import axios from 'axios'
import { LoginRequestData } from 'models'

const setToken = (token: string) =>
	(axios.defaults.headers = { authorization: token })
const loginRequest = (loginRequestData: LoginRequestData) =>
	axios.post('/admin/auth', loginRequestData)

export { setToken, loginRequest }

import axios from 'axios'

const getAllMails = () => axios.get('/admin/get_mails')

export { getAllMails }

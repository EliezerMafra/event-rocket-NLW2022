import axios from 'axios';

const api_URL = 'https://feedwid-production.up.railway.app/'
const local_URL = 'http://192.168.0.157:3333'

export const api = axios.create({
	baseURL: api_URL
})
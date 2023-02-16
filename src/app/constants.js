const API_URL = process.env.API_BASE_URL ?? 'http://127.0.0.1:1337/api/v1';

export const LOGIN_ENDPOINT = API_URL +'/auth/login'
export const LOGOUT_ENDPOINT = API_URL +'/auth/logout'
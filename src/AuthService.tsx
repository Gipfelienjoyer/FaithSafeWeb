import axios from "axios";
import Cookies from "js-cookie"

const API_URL = 'https://api.faithsafe.net';

interface LoginData {
    username: string;
    password: string;
}

interface RegisterData {
    username: string;
    password: string;
    email: string;
}

export const login = async (data: LoginData) => {
    try {
        const response = await axios.post(`${API_URL}/auth`, data);
        const accessToken = response.headers['authorization'].substring(7);
        console.log(accessToken)
        Cookies.set('accessToken', accessToken, { expires: 1 / 72 })
    } catch (error) {
        throw new Error('LoginPage failed');
    }
};

export const register = async (data: RegisterData) => {
    await axios.post(`${API_URL}/auth/register`, data);
}
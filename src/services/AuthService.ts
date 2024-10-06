import axios from "axios";
import ConstantList from "@/appConfig";

const API_PATH = ConstantList.API_ENPOINT + "/api/auth";

export function registerUser(user: any) {
    const url = API_PATH + '/register';
    return axios.post(url, user);
}

export function authenticateUser(user: any) {
    const url = API_PATH + '/authenticate';
    return axios.post(url, user);
}
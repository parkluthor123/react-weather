import axios from "axios";
import { BASE_URL } from "../utils/Helper";

export const urlApi = BASE_URL;

export const api = axios.create({
    baseURL: urlApi,
    
    headers:{
        "content-type": "application/json",
        "Accept": "application/json"
    }
})
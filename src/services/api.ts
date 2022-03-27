import axios from "axios";

export const urlApi = process.env.NEXT_PUBLIC_BASE_URL;

export const api = axios.create({
    baseURL: urlApi,
    
    headers:{
        "content-type": "application/json",
        "Accept": "application/json"
    }
})
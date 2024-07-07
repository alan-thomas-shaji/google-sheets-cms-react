import api from "./api";

export const getDataFromSheet = async () => { 
    const response = await api.get(import.meta.env.VITE_APP_API_URL + "/exec");
    return response.data;
};
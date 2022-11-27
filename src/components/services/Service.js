import axios from "axios";

export default function Service() {
    const http = axios.create({
        baseURL: 'https://new-api.coco.gl/dashboard/intw'
    })

    const getTopEngaged = async () => {
        const response = await http.get('/top/engaged');
        return response.data;
    }

    const getTopFollowers = async () => {
        const response = await http.get('/top/followers');
        return response.data;
    }

    const getDetailsApi = async (id) => {
        const response = await http.get(`/detail/${id}`);
        return response.data;
    }
}
import axios from "axios";

class Service{
    http = axios.create({
        baseURL: 'https://new-api.coco.gl/dashboard/intw'
    })

    getTopEngaged = async () => {
        const response = await this.http.get('/top/engaged');
        return response.data;
    }

    getTopFollowers = async () => {
        const response = await this.http.get('/top/followers');
        return response.data;
    }

    getDetailsApi = async (id) => {
        const response = await this.http.get(`/detail/${id}`);
        return response.data;
    }
}
export default new Service();
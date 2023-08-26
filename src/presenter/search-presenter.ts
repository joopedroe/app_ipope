import api from "../config/axios";

export default {
    getSearch: async (search: string) => {
        try {
            const response = await api.get(`/code/${search}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    postResponses: async (id: string, responses: any) => {
        try {
            const response = await api.post(`/${id}/responses`, responses);

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
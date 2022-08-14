import api from "../config/axios";

export default {
    getSearch: async (search: string) => {
        try {
            const response = await api.get(`/${search}`);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    },
    postResponses: async (search: string, responses: any) => {
        try {
            const response = await api.post(`/${search}/forms`, responses);

            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}
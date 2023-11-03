import axios from 'axios';

export const getPostsRelays = async () => {
    try {
        const response = await axios.get('http://localhost:3334/api/get-posts-relays');
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar posts:", error);
    }
};
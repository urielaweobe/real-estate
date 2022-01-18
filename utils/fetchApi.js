import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fecthApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY
          }
    });
    return data;
}
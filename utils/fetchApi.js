import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fecthApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': '43ec24e8dcmsh8b6f572a8e4bb7bp1c5cebjsn42698d065694'
          }
    });
    return data;
}
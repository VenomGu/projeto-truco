
import axios from "axios";
import md5 from "md5";

const baseURL = "http://gateway.marvel.com/v1/public/characters?";

const publicKey = "0690d3702423a6e1f775777ef4004224";

const privateKey = "d8d8dd44d0a10c8cbf58997f98026de29cc0f134";
const ts = Number(new Date());

const hash = md5(ts + privateKey + publicKey);


const api = axios.create( {
    baseURL: `http://gateway.marvel.com/v1/public/`,
    params: {
        ts,
        apikey: publicKey,
        hash,
    }
}
)

export default api;
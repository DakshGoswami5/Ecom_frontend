import axios from "axios";

const instance = axios.create({
    baseURL: "https://ecom-backend-dlxn.onrender.com/"
});


export default instance;
import axios from "axios";

export default axios.create({
    baseURL: "https://8589-102-89-34-245.eu.ngrok.io",
    withCredentials: true
}) 
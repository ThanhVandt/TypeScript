import axios from "axios";
const link = axios.create({
    baseURL: "http://localhost:3000/"
})
export default link
import { create } from "apisauce";

// online
const baseURL = "https://my-first-node-js-api.herokuapp.com/api";
// ofline <replace the ip address with you ip address to test this locally
// const baseURL = "http://192.168.0.105:9000/api";

const apiClient = create({
    baseURL,
});

export default apiClient;

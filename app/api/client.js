import { create } from "apisauce";
import { getToken } from "../auth/storage";
import cache from "../utility/cache";

// online
const baseURL = "http://bvtma.herokuapp.com/api";
// ofline <replace the ip address with you ip address to test this locally
// const baseURL = "http://192.168.0.105:9000/api";

const apiClient = create({
    baseURL,
});

apiClient.addAsyncRequestTransform(async (request) => {
    const authToken = await getToken();
    if (!authToken) return;
    request.headers["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
    const response = await get(url, params, axiosConfig);

    if (response.ok) {
        cache.store(url, response.data);
        return response;
    } else {
        const data = await cache.get(url);
        return data ? { ok: true, data } : response;
    }
};

export default apiClient;

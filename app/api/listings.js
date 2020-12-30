import client from "./client";

const endpoint = "/listings";

const getListings = () => client.get(endpoint);

const postListings = (values, onUploadProgress) => {
    const form = { ...values };
    const data = new FormData();

    for (let key of Object.keys(form)) {
        if (key === "images") {
            form[key].forEach((file, index) => {
                data.append(key, {
                    name: "image" + index,
                    type: "image/jpeg",
                    uri: file,
                });
            });
        } else if (key === "location") {
            form[key] !== null && data.append(key, JSON.stringify(form[key]));
        } else if (key === "category") {
            data.append("categoryId", form[key].value);
        } else {
            data.append(key, form[key]);
        }
    }

    return client.post(endpoint, data, {
        onUploadProgress: ({ loaded, total }) =>
            onUploadProgress(loaded / total),
    });
};

export default {
    getListings,
    postListings,
};

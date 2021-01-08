import React, { useState } from "react";

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(undefined);

    const request = async (...args) => {
        setLoading(true);
        const response = await apiFunc(...args);
        setLoading(false);

        setError(!response.ok);
        setData(response.data);
        return response;
    };

    return {
        data,
        error,
        loading,
        request,
    };
};

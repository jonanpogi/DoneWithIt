import React, { useState } from "react";

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(undefined);

    const request = async () => {
        setLoading(true);
        const response = await apiFunc();
        setLoading(false);

        if (!response.ok) {
            setError(true);
        } else {
            setError(false);
            setData(response.data);
        }
    };

    return {
        data,
        error,
        loading,
        request,
    };
};

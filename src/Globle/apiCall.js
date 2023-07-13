import axios from "axios";

const makeAPIRequest = async (method, url, data, headers, params) =>
    new Promise(async (resolve, reject) => {
        const token = await sessionStorage.getItem("Admin_Token");
        const options = {
            ...{
                method,
                url,
                data,
                params,
            },
            ...(token && { headers: { 'auth-token': token } }),
        };
        if (headers) {
            options.headers = { ...options.headers, ...headers };
        }
        axios(options)
            .then(async (response) => {
                if (response?.status === 200 || response?.status === 201) {
                    resolve(response);
                } else {
                    reject(response);
                }
            })
            .catch(async (error) => {
                reject(error);
            });
        return null;
    });

export default makeAPIRequest;
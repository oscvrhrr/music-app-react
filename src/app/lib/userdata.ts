import { useEffect } from "react";


type GetProviderTokenFunction = () => string | null;

export const getProviderToken = async() => {
    return new Promise<string | null>(((resolve) => {
        const delay = 500;

        setTimeout(async() => {
            const userKey = 'sb-qialdoqbifdznwohbbea-auth-token';
            const data =  localStorage.getItem(userKey);
            const userData = data ? JSON.parse(data) : null;
            const token = userData.provider_token;
            resolve(token);
        }, delay)
    }));
}


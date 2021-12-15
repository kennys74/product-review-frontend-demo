import axios from 'axios';
const baseDomain = 'http://173.212.222.70:1337/api'; // API for products

export const customHeaders = {
    Accept: 'application/json',
    Authorization: 'Bearer 2a67f5d9e96f87ff47a02a502374869f026d7565fb4726860a288eb3242169469f4d9d188c0b24d67790a9c7960aa21430a01f47689d53c26f5e533e79ed7c1ea3c200d2a4a447df3d4ab6fab67684bf7229307adffea81aad3d2bd5d9568f33d829b8bd7cbe2d17ed36ad50b8e856f6a58663ea9634ade150466ffcbf72e75b',
};

export const baseUrl = `${baseDomain}`;

export default axios.create({
    baseUrl,
    headers: customHeaders,
});

export const serializeQuery = (query) => {
    return Object.keys(query)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join('&');
};

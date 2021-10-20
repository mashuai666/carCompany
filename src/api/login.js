import request from '../utils/request';
const baseUrl = 'http://localhost:3000'
export const login = query => {
    return request({
        url: `${baseUrl}/user/login`,
        method: 'get',
        params: query
    });
};

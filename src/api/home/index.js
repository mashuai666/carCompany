import request from '../../utils/request';
const baseUrl = 'http://localhost:3000'
export const home = query => {
    return request({
        url: `${baseUrl}/user/home`,
        method: 'get',
        params: query
    });
};

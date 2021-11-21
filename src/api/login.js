// 登录页面
import request from '../utils/request';
const baseUrl = 'http://localhost:3000'

// 登录
export const login = query => {
    return request({
        url: `${baseUrl}/login/login`,
        method: 'post',
        data:query
        // params: query
    });
};

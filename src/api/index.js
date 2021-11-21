// 登录页面
import request from '../utils/request';
const baseUrl = 'http://localhost:3000'

// 获取用户信息
export const getUserInfo = query => {
    return request({
        url: `${baseUrl}/index/getUserInfo`,
        method: 'get',
        params: query,
        headers:{
            Authorization:window.sessionStorage.getItem('token')
        }
    });
};

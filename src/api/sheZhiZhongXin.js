// 设置中心页面
import request from '../utils/request';
const baseUrl = 'http://localhost:3000'

// 获取员工数据
export const getEmployees = query => {
    return request({
        url: `${baseUrl}/sheZhiZhongXin/getEmployees`,
        method: 'get',
        // data:query
        params: query,
        headers:{
        Authorization:window.sessionStorage.getItem('token')
    }
    });
};

// 获取服务项目
export const getServe = query => {
    return request({
        url: `${baseUrl}/sheZhiZhongXin/getServe`,
        method: 'get',
        // data:query
        params: query,
        headers:{
            Authorization:window.sessionStorage.getItem('token')
        }
    });
};

// 库存中心
import request from '../utils/request';
const baseUrl = 'http://localhost:3000/home/'

// 获取库存
export const getMountings = query => {
    return request({
        url: `${baseUrl}getMountings`,
        method: 'get',
        // data:query
        params: query,
        headers:{
            Authorization:window.sessionStorage.getItem('token')
        }
    });
};

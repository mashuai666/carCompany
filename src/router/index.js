import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: '/',
        redirect: '/index'
    }, {
        path: "/",
        name: "Home",
        component: Home,
        children: [
            {
                path: "/index",
                name: "index",
                meta: {
                    title: '系统首页'
                },
                component: () => import (
                "../views")
            }, 
            {
                path: "/weiXiuKaiDan",
                name: "weiXiuKaiDan",
                meta: {
                    title: '维修开单'
                },
                component: () => import (
                "../views/weiXiuKaiDan.vue")
            },
            {
                path: "/weiXiuDan",
                name: "weiXiuDan",
                meta: {
                    title: '维修单打印'
                },
                component: () => import (
                    "../views/weiXiuDan.vue")
            },
            {
                path: "/weiXiuLiShi",
                name: "weiXiuLiShi",
                meta: {
                    title: '维修历史'
                },
                component: () => import (
                    "../views/weiXiuLiShi.vue")
            },
            {
                path: "/weiXiuXiangQing",
                name: "weiXiuXiangQing",
                meta: {
                    title: '维修详情'
                },
                component: () => import (
                    "../views/weiXiuXiangQing.vue")
            },
            {
                path: "/shangPinCaiGou",
                name: "shangPinCaiGou",
                meta: {
                    title: '商品采购'
                },
                component: () => import (
                    "../views/shangPinCaiGou.vue")
            },
            {
                path: "/caiGouJiLu",
                name: "caiGouJiLu",
                meta: {
                    title: '采购记录'
                },
                component: () => import (
                    "../views/caiGouJiLu.vue")
            },
            {
                path: "/daoRuShangPin",
                name: "daoRuShangPin",
                meta: {
                    title: '导入商品'
                },
                component: () => import (
                    "../views/daoRuShangPin.vue")
            },
            {
                path: "/kuCunZhongXin",
                name: "kuCunZhongXin",
                meta: {
                    title: '库存中心'
                },
                component: () => import (
                    "../views/kuCunZhongXin.vue")
            },
            {
                path: "/keHuGuanLi",
                name: "keHuGuanLi",
                meta: {
                    title: '客户管理'
                },
                component: () => import (
                    "../views/keHuGuanLi.vue")
            },
            {
                path: "/huiFangKeHu",
                name: "huiFangKeHu",
                meta: {
                    title: '回访客户'
                },
                component: () => import (
                    "../views/huiFangKeHu.vue")
            },
            {
                path: "/sheZhiZhongXin",
                name: "sheZhiZhongXin",
                meta: {
                    title: '设置中心'
                },
                component: () => import (
                    "../views/sheZhiZhongXin.vue")
            },









            {
                path: "/table",
                name: "basetable",
                meta: {
                    title: '表格'
                },
                component: () => import (
                /* webpackChunkName: "table" */
                "../views/BaseTable.vue")
            }, {
                path: "/charts",
                name: "basecharts",
                meta: {
                    title: '图表'
                },
                component: () => import (
                /* webpackChunkName: "charts" */
                "../views/BaseCharts.vue")
            }, {
                path: "/form",
                name: "baseform",
                meta: {
                    title: '表单'
                },
                component: () => import (
                /* webpackChunkName: "form" */
                "../views/BaseForm.vue")
            }, {
                path: "/tabs",
                name: "tabs",
                meta: {
                    title: 'tab标签'
                },
                component: () => import (
                /* webpackChunkName: "tabs" */
                "../views/Tabs.vue")
            }, {
                path: "/donate",
                name: "donate",
                meta: {
                    title: '鼓励作者'
                },
                component: () => import (
                /* webpackChunkName: "donate" */
                "../views/Donate.vue")
            }, {
                path: "/permission",
                name: "permission",
                meta: {
                    title: '权限管理',
                    permission: true
                },
                component: () => import (
                /* webpackChunkName: "permission" */
                "../views/Permission.vue")
            }, {
                path: "/i18n",
                name: "i18n",
                meta: {
                    title: '国际化语言'
                },
                component: () => import (
                /* webpackChunkName: "i18n" */
                "../views/I18n.vue")
            }, {
                path: "/upload",
                name: "upload",
                meta: {
                    title: '上传插件'
                },
                component: () => import (
                /* webpackChunkName: "upload" */
                "../views/Upload.vue")
            }, {
                path: "/icon",
                name: "icon",
                meta: {
                    title: '自定义图标'
                },
                component: () => import (
                /* webpackChunkName: "icon" */
                "../views/Icon.vue")
            }, {
                path: '/404',
                name: '404',
                meta: {
                    title: '找不到页面'
                },
                component: () => import (/* webpackChunkName: "404" */
                '../views/404.vue')
            }, {
                path: '/403',
                name: '403',
                meta: {
                    title: '没有权限'
                },
                component: () => import (/* webpackChunkName: "403" */
                '../views/403.vue')
            }
        ]
    }, {
        path: "/login",
        name: "Login",
        meta: {
            title: '登录'
        },
        component: () => import (
        /* webpackChunkName: "login" */
        "../views/Login.vue")
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} | vue-manage-system`;
    const role = sessionStorage.getItem('token');
    if (!role && to.path !== '/login') {
        next('/login');
    } else if (to.meta.permission) {
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin'
            ? next()
            : next('/403');
    } else {
        next();
    }
});

export default router;
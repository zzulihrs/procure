import Mock from 'mockjs'
import homeApi from './mockServeData/home'

// 定义Mock请求拦截
Mock.mock('/api/home/getData', 'get',homeApi.getStatisticalData())
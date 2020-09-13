import { fetch, post } from '@/lib/http'

// 分页获取商品列表
export const productList = '/product/product/page'
// 获取某一商品的详情
export const productDetail = '/product/product/detail'

export const test = () => fetch('http://127.0.0.1:3000/news/getNewsLists')

export const login = params => post('http://127.0.0.1:3000/login', params)
// inputTest
export const fetchListData = () => fetch('/mock/list.json')

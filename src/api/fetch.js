/**
 * Created by ever on 2019/12/19.
 */

import axios from 'axios'
import {Toast} from "antd-mobile";

const fetch = axios.create({
    baseURL: 'http://localhost:9093',
    timeout: 5000
})
fetch.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
fetch.defaults.crossDomain = true
fetch.defaults.withCredentials = true

fetch.interceptors.request.use(config => {
    Toast.loading('拼命加载中...', 0)
    const mts_token = window.sessionStorage.getItem('token')
    if (mts_token) {
        config.headers['Authorization'] = `Bearer ${mts_token}`
    }

    console.log('发送的数据是...', config.data)
    return config
}, error => {
    Promise.reject(error)
})

fetch.interceptors.response.use(async response => {
    Toast.hide()
    console.log('获取到的值是..', response)
    if (response.data.code === 0) {
        if (response.data.token) {
            window.sessionStorage.setItem('token', response.data.token)
        }
        return Promise.resolve(response.data)
    } else {
        Toast.fail(response.data.msg, 3)
        return Promise.reject(response.data)
    }
}, error => {
    Toast.hide()
    if (error.response) {
        if (error.response.status === 500) {
            Toast.fail('服务器错误,请联系管理员处理')
        } else if (error.response.status === 401) {
            window.localStorage.removeItem('token')
        }
        return Promise.reject(error)
    } else {
        Toast.info('请求超时, 请重新登录')
        return Promise.reject(new Error('请求超时,请稍后再试'))
    }
})

const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        fetch({
            method: 'get',
            url,
            params,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

const post = (url, data, config = {}) => {
    return new Promise((resolve, reject) => {
        fetch({
            method: 'post',
            url,
            data,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

export {
    get,
    post
}
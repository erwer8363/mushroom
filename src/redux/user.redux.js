/**
 * Created by ever on 2019/12/12.
 */
import {getRedirectPath} from "../util";
import {apiLogin, apiRegister, apiUpdate} from "../api";

const AUTH_SUCCESS = 'auth_success'
const ERROR_MSG = 'error_msg'
const LOAD_DATA = 'load_data'
const initState = {
    redirectTo: '',
    msg: '',
    user: '',
    type: ''
}

export function user(state = initState, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return {...state, msg: '', redirectTo: getRedirectPath(action.data), ...action.data}
        case LOAD_DATA:
            return {...state, ...action.data}
        case ERROR_MSG:
            return {...state, isAuth: false, msg: action.msg}
        default:
            return state
    }
}

function authSuccess(obj) {
    const {pwd, ...data} = obj
    return {data, type: AUTH_SUCCESS}
}

export function loadData(data) {
    return {data, type: LOAD_DATA}
}

// 同步方法
function errorMsg(msg) {
    return {msg, type: ERROR_MSG}
}

// 异步方法
export function register({user, pwd, repeatpwd, type}) {
    if (!user || !pwd || !type) {
        return errorMsg('用户名密码必须输入')
    }
    if (pwd !== repeatpwd) {
        return errorMsg('两次密码输入不相同')
    }
    return dispatch => {
        apiRegister({user, pwd, type}).then(res => {
            if (res.code === 0) {
                dispatch(authSuccess({user, pwd, type}))
            }
        })
    }
}

export function login({user, pwd}) {
    if (!user || !pwd) {
        return errorMsg('用户名密码必须输入')
    }
    return dispatch => {
        apiLogin({user, pwd}).then(res => {
            if (res.code === 0) {
                dispatch(authSuccess({user, type: res.data.type}))
            }
        })
    }
}

export function update(data) {
    console.log(data)
    return dispatch => {
        apiUpdate(data).then(res => {
            if (res.code === 0) {
                dispatch(authSuccess(res.data))
            }
            console.log('用户更新数据....', res)
        })
    }
}
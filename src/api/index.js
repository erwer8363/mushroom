/**
 * Created by ever on 2019/12/19.
 */
import {get, post} from "./fetch";

// 登陆
export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// 注册
export const apiRegister = ({user, pwd, type}) => post('/user/register', {user, pwd, type})
// 用户更新信息
export const apiUpdate = (data) => post('/user/update', data)
// 获取牛人列表
export const apiGeniusList = ({type}) => get('/user/list', {type})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
// export const apiLogin = ({user, pwd}) => post('/user/login', {user, pwd})
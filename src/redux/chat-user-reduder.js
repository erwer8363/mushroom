import {apiGeniusList} from "../api";

/**
 * Created by ever on 2019/12/31.
 */

const USER_LIST = 'user_list'

const initState = {
    userlist: []
}

export function chatuser(state = initState, action) {
    switch (action.type) {
        case USER_LIST:
            return {...state, userlist: action.data}
            break;
        default:
            return state
    }
}

// 同步方法
function userList(data) {
    return {type: USER_LIST, data}
}

// 异步方法
export function getUserList(type) {
    return dispatch => {
        apiGeniusList({type}).then(res => {
            if (res.code === 0) {
                dispatch(userList(res.data))
            }
        })
    }
}
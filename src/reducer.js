/**
 * Created by ever on 2019/12/9.
 */
import {combineReducers} from 'redux'
import {user} from "./redux/user.redux";
import {chatuser} from "./redux/chat-user-reduder";

export default combineReducers({user, chatuser})
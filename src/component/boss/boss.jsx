/**
 * Created by ever on 2019/12/23.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserList} from "../../redux/chat-user-reduder";
import UserCard from "../usercard/userCard";

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends Component {
    componentDidMount() {
        this.props.getUserList('genius')
    }

    render() {
        return <UserCard userlist={this.props.userlist}/>
    }
}

export default Boss

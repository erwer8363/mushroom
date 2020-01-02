/**
 * Created by ever on 2020/1/2.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getUserList} from "../../redux/chat-user-reduder";
import UserCard from "../usercard/userCard";

@connect(
    state => state.chatuser,
    {getUserList}
)
class Genius extends Component {
    componentDidMount() {
        this.props.getUserList('boss')
    }

    render() {
        return <UserCard userlist={this.props.userlist}/>
    }
}

export default Genius

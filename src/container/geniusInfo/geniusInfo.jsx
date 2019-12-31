/**
 * Created by ever on 2019/12/21.
 */
import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {update} from "../../redux/user.redux";
import AvatarSelector from "../../component/avatar-selector/avatar-selector";
import {Button, InputItem, NavBar, TextareaItem, WhiteSpace, WingBlank} from "antd-mobile";

@connect(
    state => state.user,
    {update}
)
class GeniusInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: '',
            title: '',
            desc: ''
        }
    }

    onChangeHandler = (k, v) => {
        this.setState({
            [k]: v
        })
    }

    render() {
        const infoArr = [{key: 'title', val: '求职岗位'}]
        const path = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        return (
            <Fragment>
                {redirectTo && redirectTo !== path ? <Redirect to={redirectTo}/> : null}
                <NavBar mode='dark'>牛人完善信息</NavBar>
                <AvatarSelector selectAvatar={text => this.setState({'avatar': text})}/>
                <WhiteSpace/>
                {
                    infoArr.map(item => (
                        <InputItem onChange={v => this.onChangeHandler(item.key, v)}
                                   key={item.key}>{item.val}</InputItem>
                    ))
                }
                <TextareaItem
                    rows={3} autoHeight title='个人简介'
                    onChange={v => this.onChangeHandler('desc', v)}>
                </TextareaItem>
                <WingBlank>
                    <Button type='primary' onClick={() => this.props.update(this.state)}>保存</Button>
                </WingBlank>
            </Fragment>
        )
    }
}

export default GeniusInfo
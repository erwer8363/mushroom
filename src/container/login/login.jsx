/**
 * Created by ever on 2019/12/10.
 */
import React, {Component, Fragment} from 'react'
import Logo from '../../component/logo/index'
import {Button, InputItem, List, WhiteSpace, WingBlank} from "antd-mobile";
import {connect} from 'react-redux'
import {login} from '../../redux/user.redux'
import {Redirect} from "react-router-dom";

@connect(
    state => state.user,
    {login}
)
class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: ''
        }
    }

    changeHandler = (key, val) => {
        this.setState({
            [key]: val
        })
    }
    loginHandler = () => {
        this.props.login(this.state)
    }
    register = () => {
        this.props.history.push('/register')
    }

    render() {
        return (
            <Fragment>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <List>
                    <p className='error-msg'>{this.props.msg}</p>
                    <InputItem onChange={val => this.changeHandler('user', val)}>用户</InputItem>
                    <WhiteSpace/>
                    <InputItem type='password' onChange={val => this.changeHandler('pwd', val)}>密码</InputItem>
                </List>
                <WhiteSpace/>
                <WingBlank>
                    <Button type='primary' onClick={this.loginHandler}>登录</Button>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </Fragment>
        )
    }
}

export default Login
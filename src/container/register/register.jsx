/**
 * Created by ever on 2019/12/10.
 */
import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import Logo from "../../component/logo";
import {Button, InputItem, List, Radio, WhiteSpace, WingBlank} from "antd-mobile";
import {connect} from 'react-redux'
import {register} from "../../redux/user.redux";

const RadioItem = Radio.RadioItem

@connect(
    state => state.user,
    {register}
)
class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: '',
            pwd: '',
            repeatpwd: '',
            type: 'genius'
        }
    }

    register = () => {
        this.props.register(this.state)
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
        console.log(key, value)
    }

    render() {
        return (
            <Fragment>
                {this.props.redirectTo ? <Redirect to={this.props.redirectTo}/> : null}
                <Logo/>
                <p className='error-msg'>{this.props.msg}</p>
                <WingBlank>
                    <List>
                        <InputItem onChange={(val) => this.handleChange('user', val)}>用户名</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password' onChange={(val) => this.handleChange('pwd', val)}>密码</InputItem>
                        <WhiteSpace/>
                        <InputItem type='password'
                                   onChange={(val) => this.handleChange('repeatpwd', val)}>确认密码</InputItem>
                        <WhiteSpace/>
                        <RadioItem
                            checked={this.state.type === 'genius'}
                            onChange={(val) => this.handleChange('type', 'genius')}
                        >
                            牛人
                        </RadioItem>
                        <RadioItem
                            checked={this.state.type === 'boss'}
                            onChange={(val) => this.handleChange('type', 'boss')}
                        >
                            老板
                        </RadioItem>
                    </List>
                    <WhiteSpace/>
                    <Button type='primary' onClick={this.register}>注册</Button>
                </WingBlank>
            </Fragment>
        )
    }
}

export default Register
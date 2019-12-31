/**
 * Created by ever on 2019/12/20.
 */
import React, {Component, Fragment} from 'react'
import {Redirect} from 'react-router-dom'
import {Button, InputItem, NavBar, TextareaItem, WhiteSpace, WingBlank} from "antd-mobile";
import AvatarSelector from "../../component/avatar-selector/avatar-selector";
import {connect} from 'react-redux'
import {update} from "../../redux/user.redux";

@connect(
    state => state.user,
    {update}
)
class BossInfo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            avatar: '',
            title: '',
            company: '',
            money: '',
            desc: ''
        }
    }

    onChange = (key, val) => {
        this.setState({
            [key]: val
        })
    }

    render() {
        const infoArr = [{key: 'title', val: '招聘职位'}, {key: 'company', val: '公司名称'}, {key: 'money', val: '职位薪资'}]
        const path = this.props.location.pathname
        const redirectTo = this.props.redirectTo
        console.log(path, redirectTo)
        return (
            <Fragment>
                {redirectTo && redirectTo !== path ? <Redirect to={redirectTo}/> : null}
                <NavBar mode="dark">BOSS完善信息页</NavBar>
                <AvatarSelector selectAvatar={text => this.setState({'avatar': text})}/>
                <WhiteSpace/>
                {
                    infoArr.map(item => (
                        <InputItem onChange={v => this.onChange(item.key, v)} key={item.key}>{item.val}</InputItem>
                    ))
                }
                <TextareaItem
                    rows={3} autoHeight title='职位要求'
                    onChange={v => this.onChange('desc', v)}>
                </TextareaItem>
                <WingBlank>
                    <Button onClick={() => this.props.update(this.state)} type='primary'>保存</Button>
                </WingBlank>
            </Fragment>
        )
    }
}

export default BossInfo
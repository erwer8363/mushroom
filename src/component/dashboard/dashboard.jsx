/**
 * Created by ever on 2019/12/22.
 */
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {Route, Switch} from 'react-router-dom'
import {NavBar} from "antd-mobile";
import NavlinkBar from "../navlink/navlink";
import Boss from "../boss/boss";

function Genius() {
    return <h1>牛人首页</h1>
}

function Msg() {
    return <h1>消息列表</h1>
}

function MeInfo() {
    return <h1>我的信息</h1>
}

@connect(
    state => state
)
class Dashboard extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const {pathname} = this.props.location
        const user = this.props.user
        const navList = [
            {
                path: '/boss',
                text: '牛人',
                icon: 'boss',
                title: '牛人列表',
                component: Boss,
                hide: user.type === 'genius'
            },
            {
                path: '/genius',
                text: 'boss',
                icon: 'job',
                title: 'BOSS列表',
                component: Genius,
                hide: user.type === 'boss'
            },
            {
                path: '/msg',
                text: '消息',
                icon: 'msg',
                title: '消息列表',
                component: Msg
            },
            {
                path: '/me',
                text: '我',
                icon: 'user',
                title: '个人中心',
                component: MeInfo
            }
        ]
        return (
            <Fragment>
                <NavBar className='fixed-header' type='dark'>{navList.find(v => v.path === pathname).title}</NavBar>
                <div>
                    <Switch>
                        {
                            navList.map(v => (
                                <Route path={v.path} component={v.component} key={v.path}/>
                            ))
                        }
                    </Switch>
                </div>
                <NavlinkBar data={navList}/>
            </Fragment>
        )
    }
}

export default Dashboard
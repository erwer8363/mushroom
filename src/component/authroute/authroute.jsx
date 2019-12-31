/**
 * Created by ever on 2019/12/11.
 */
import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {loadData} from "../../redux/user.redux";
import {connect} from 'react-redux'
import {get} from "../../api/fetch";
import {Modal} from "antd-mobile";

@withRouter
@connect(
    null,
    {loadData}
)
class AuthRoute extends Component {
    constructor(props) {
        super(props)
        this.state = {
            failModal: false
        }
    }

    componentDidMount() {
        const publicPath = ['/login', '/register']
        const pathname = this.props.history.location.pathname
        if (publicPath.includes(pathname)) {
            return
        } else {
            get('/user/info').then(res => {
                console.log('有了登陆信息了,为啥还跳登录页', res.data, typeof res.code)
                if (res.code === 0) {
                    // 有登录信息
                    console.log('有登陆信息,应该不跳转的啊')
                    this.props.loadData(res.data)
                } else {
                    console.log('未擦..这里执行了吗.....')
                    this.props.history.push('/login')
                }
            }).catch(err => {
                this.setState({
                    failModal: true
                })
                console.log('zheli 侠士数据了吗...', err)
            })
        }
    }

    onClose = key => () => {
        this.setState({
            [key]: false,
        });
    }

    render() {
        return (<Modal
            visible={this.state.failModal}
            transparent
            maskClosable={false}
            onClose={this.onClose('failModal')}
            title="温馨提示"
            footer={[{
                text: '确定', onPress: () => {
                    this.onClose('failModal')();
                }
            }]}
            afterClose={() => {
                this.props.history.push('/login')
            }}
        >
            <div style={{height: 50, overflow: 'hidden', lineHeight: '50px'}}>
                登录超时,请重新登录
            </div>
        </Modal>)
    }
}

export default AuthRoute
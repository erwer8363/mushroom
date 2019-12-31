/**
 * Created by ever on 2019/12/23.
 */
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card, WhiteSpace, WingBlank} from "antd-mobile";
import {getUserList} from "../../redux/chat-user-reduder";

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.props.getUserList('genius')
    }

    render() {
        const {userlist} = this.props
        const Header = Card.Header
        const Body = Card.Body
        const Footer = Card.Footer
        return (
            <WingBlank>
                {
                    userlist.map(v => (
                        v.avatar ? (<div key={v._id}>
                            <WhiteSpace/>
                            <Card>
                                <Header
                                    title={v.user}
                                    thumb={require(`../img/${v.avatar}.png`)}
                                    extra={<span>{v.title}</span>}
                                />
                                <Body>
                                    {
                                        v.desc ? <div>{v.desc}</div> : null
                                    }
                                </Body>
                            </Card>
                        </div>) : null
                    ))
                }
            </WingBlank>
        )
    }
}

export default Boss
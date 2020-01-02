/**
 * Created by ever on 2020/1/2.
 */
import React, {Component} from 'react'
import PropType from 'prop-types'
import {Card, WhiteSpace, WingBlank} from "antd-mobile";

class UserCard extends Component {
    static propTypes = {
        userlist: PropType.array.isRequired
    }

    render() {
        const Header = Card.Header
        const Body = Card.Body
        return (
            <WingBlank>
                {
                    this.props.userlist.map(v => (
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
                                        v.type === 'boss' ? <div>公司:{v.company}</div> : null
                                    }
                                    {
                                        v.desc ? <div>{v.desc}</div> : null
                                    }
                                    {
                                        v.type === 'boss' ? <div>薪资:{v.money}</div> : null
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

export default UserCard

/**
 * Created by ever on 2019/12/22.
 */
import React, {Component, Fragment} from 'react'
import PropTypes from 'prop-types'
import {TabBar} from "antd-mobile";
import {withRouter} from 'react-router-dom'

@withRouter
class NavlinkBar extends Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props)
    }

    // badge={'new'}


    // data-seed="logId1"

    // path: '/boss',
    // text: '牛人',
    // icon: 'boss',
    // title: '牛人列表',
    // component: Boss,
    // hide: user.type === 'genius'

    render() {
        const navList = this.props.data.filter(v => !v.hide)
        const {pathname} = this.props.location
        return (
            <Fragment>
                <TabBar>
                    {
                        navList.map(item => (
                            <TabBar.Item
                                title={item.text}
                                key={item.path}
                                icon={{uri: require(`./img/${item.icon}.png`)}}
                                selectedIcon={{uri: require(`./img/${item.icon}-active.png`)}}
                                selected={item.path === pathname}
                                onPress={() => {
                                    this.props.history.push(item.path)
                                }}
                            />
                        ))
                    }
                </TabBar>
            </Fragment>
        )
    }
}

export default NavlinkBar
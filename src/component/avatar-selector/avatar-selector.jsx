/**
 * Created by ever on 2019/12/20.
 */
import React, {Component, Fragment} from 'react'
import {Grid, List} from "antd-mobile";
import './avatar.scss'
import PropTypes from 'prop-types'

class AvatarSelector extends Component {
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const avatarList = 'boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra'
            .split(',').map(v => ({
                icon: require(`../img/${v}.png`),
                text: v
            }))
        const gridHeader = this.state.icon
            ? (<div>
                <span style={{lineHeight: '20px'}}>已选择头像</span>
                <img style={{width: 20}} src={this.state.icon} alt=""/>
            </div>)
            : '请选择头像'
        return (
            <Fragment>
                <List renderHeader={gridHeader}>
                    <Grid
                        data={avatarList}
                        columnNum={5}
                        activeClassName='activeClass'
                        onClick={elm => {
                            this.setState(elm)
                            this.props.selectAvatar(elm.text)
                        }}>
                    </Grid>
                </List>
            </Fragment>
        )
    }
}

export default AvatarSelector
/**
 * Created by ever on 2020/1/2.
 */
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

@connect(
    state => state.chatuser
)
class Genius extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>

            </Fragment>
        )
    }
}

export default Genius

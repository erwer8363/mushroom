/**
 * Created by ever on 2019/12/10.
 */
import React, {Component} from 'react'
import logoImg from './job.png'
import './logo.scss'

class Logo extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='logo-container'>
                <img src={logoImg} alt="logo"/>
            </div>
        )
    }
}

export default Logo
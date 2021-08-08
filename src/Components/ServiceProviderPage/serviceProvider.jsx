import React from 'react'
import { ServiceHeader } from './serviceHeader'
import { ServiceBody } from './serviceBody'
import { ServiceFooter } from './serviceFooter'
import './myStyle.css';

export class ServiceProvider extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          accessToken : this.props.location.state && this.props.location.state.accessToken
        }
    }

    render() {

        return <div>

            <ServiceHeader/>
            <ServiceBody accessToken={this.state.accessToken}/>
            <ServiceFooter/>
        </div>
    }
}
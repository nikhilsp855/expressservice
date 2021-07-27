import React from 'react'
import { ServiceHeader } from './serviceHeader'
import { ServiceBody } from './serviceBody'
import { ServiceFooter } from './serviceFooter'
import './myStyle.css';

export class ServiceProvider extends React.Component {

    render() {

        return <div>

            <ServiceHeader/>
            <ServiceBody/>
            <ServiceFooter/>
        </div>
    }
}
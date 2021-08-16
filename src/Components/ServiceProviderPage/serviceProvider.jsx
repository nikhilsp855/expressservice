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
        };
        this.headerRef = React.createRef();
    }

    changeProfileImage(profilePic) {
        this.headerRef.current.changeProfilePic(profilePic);
    }

    changeServiceTitle(serviceTitle) {
        this.headerRef.current.changeServiceTitle(serviceTitle);
    }

    changeSlogan(slogan) {
        this.headerRef.current.changeSlogan(slogan);
    }

    render() {

        return <div>

            <ServiceHeader accessToken={this.state.accessToken} ref={this.headerRef}/>
            <ServiceBody accessToken={this.state.accessToken} changeProfileImage={this.changeProfileImage.bind(this)} changeServiceTitle={this.changeServiceTitle.bind(this)} changeSlogan={this.changeSlogan.bind(this)}/>
            <ServiceFooter/>
        </div>
    }
}
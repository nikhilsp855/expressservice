import React from 'react'
import customerListStore from './serviceProviderCustomerAPI'

export class CustomerList extends React.Component {

    constructor() {

        super();
        this.state = {customers : customerListStore.getCustomer(), start : 0, len : customerListStore.getCustomer().length, update:false};
    }

    handleNext() {

        if(this.state.start+5 < this.state.len) {
        
            this.setState({start : this.state.start+5})
        }
    }

    handlePrev() {

        if(this.state.start-5 >= 0) {
        
            this.setState({start : this.state.start-5})
        }
    }

    render() {

        var customerList2=[];
        
        for(let i=this.state.start;i<this.state.customers.length && i<this.state.start+5;i++) {
        
            customerList2.push(<div className="col-md-12 container-fluid customer" key={this.state.customers[i].id}>

                <div className="row">

                    <div className="col-md-4">
                        <img src={this.state.customers[i].pic} alt="customer pic" class='customerImage'/>
                    </div>
                    <div className="col-md-7">
                        <h4 className='sph4'>{this.state.customers[i].name}</h4>
                        <p>{this.state.customers[i].address}</p>
                        <p>{this.state.customers[i].date}</p>
                    </div>
                    <div className="col-md-1">

                        <div className={this.state.customers[i].status}></div>
                        <br/>
                        <br/>
                        <br/>
                        <div>{this.state.customers[i].payment}</div>
                    </div>

                </div>

            </div>);
        }

        
        customerList2.splice(0,0,<h2 className="text-center" key='001'><strong>Customers</strong></h2>)
        customerList2.push(<div key='9999'><button className='PrevButton' onClick={this.handlePrev.bind(this)}>Prev</button><button className='NextButton' onClick={this.handleNext.bind(this)}>Next</button></div>)

        console.log('In customer List : ',customerList2);
        return customerList2;
        
    }
}
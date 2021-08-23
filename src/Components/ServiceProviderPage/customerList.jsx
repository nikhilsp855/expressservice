import React from 'react'
import customerListStore from './serviceProviderCustomerAPI'



export class CustomerList extends React.Component {

    constructor(props) {

        super(props);
        this.state = {customers : [], start : 0, len : 0, update:false};
    }

    async componentDidMount() {
        this.getCustomerList(this.props.accessToken)
          .then(elements => this.setState({ customers:elements, len:elements.length, start:0, update:false}))
          .catch(e => console.log(e));
    }


    async getCustomerList(accessToken){

    console.log("getCustomerList called");
    console.log("accessToken : ",accessToken);


    const res = await fetch("https://expressservicebackend.herokuapp.com/serviceproviders",{
      method : "POST",
      headers : {
        "Authorization":"Bearer "+accessToken
      }
    });

    const data = await res.json();
    /*if(data.status(200)) {

      alert("Login successfull");
      console.log("Login successfull")
    }else if(data.status(202)) {

      alert("Login unsuccessfull");
      console.log("Login unsuccessfull")
    }*/

    if(data) {

        console.log("data.customerList = ",data.customerList);
        return data.customerList;
    
    }
    return [];
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
                        <p>{this.state.customers[i].time}</p>
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
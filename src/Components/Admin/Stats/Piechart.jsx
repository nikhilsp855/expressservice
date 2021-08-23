import React from 'react';
import {Pie} from 'react-chartjs-2';

export default class Piechart extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            BarData:{
                labels: ['Mens Grooming', 'Painters', 'Plumbers', 'Cleaning Service',
                         'Electritions', 'Carpenters'],
                         datasets: [{
                            label: 'No of Customers',
                            data: [0, 0, 0, 0, 0, 0],
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.5)',
                                'rgba(54, 162, 235, 0.5)',
                                'rgba(255, 206, 86, 0.5)',
                                'rgba(75, 192, 192, 0.5)',
                                'rgba(153, 102, 255, 0.5)',
                                'rgba(255, 159, 64, 0.5)'
                            ],
                            borderColor:'white',
                            borderWidth:5,
                        }]
            },/*
            LineData:{
                labels:['Jan', 'Feb', 'Mar', 'Aprl','May','Jun','July','Aug','Sep',
                'Oct', 'Nov','Dec'],
               datasets: [{
                   label: 'Monthly services',
                   data: [499,412,532,487,631,362,401,431,455,567,466,427],
                   backgroundColor: 'red',
                   borderColor: 'Blue',
                   borderWidth: 5
               }]
            },*/
            dataFetched : 0
        }
    }

    async componentDidMount() {

        await this.getUtilisedServicesList(this.props.accessToken)
            .then((result) => {
                this.setState({BarData : result, dataFetched : 1});
                //console.log("result = ",result);
            });
    }

    async getUtilisedServicesList(accessToken) {

        const res = await fetch("https://expressservicebackend.herokuapp.com/admin/stats/getUtilisedServicesList",{
          method : "GET",
          headers : {
            "Authorization":"Bearer "+accessToken,
            "Content-Type" : "application/json"
          }
        });
    
        const data = await res.json();
    

        var tempData = this.state.BarData;
        if(data) {
            
            tempData.datasets[0].data = [data.mensGrooming,data.painter, data.plumber, data.cleaningService, data.electricians, data.carpenters];
            
            return tempData;
        
        }
        return tempData;
    }

    render() {

        if(this.state.dataFetched === 1){
        
            return (
            
                <div className = 'chart'>
                    <Pie
	                    data={this.state.BarData}
	                    width={600}
	                    height={400}
	                    options={{
                            maintainAspectRatio: false,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Customers per service',
                                    font: {
                                            size: 25
                                        }
                                },
                                legend: {
                                    display: true,
                                    position:'right',
                                    labels: {
                                        color: 'Black',
                                        font: {
                                            size: 25
                                        }
                                    }
                                }
                            }
                        }
                    }/>
                </div>
            )
        }else {

            return <div className = 'chart'>
                    <h2>Customers per service</h2>
                </div>
        }
    }
}

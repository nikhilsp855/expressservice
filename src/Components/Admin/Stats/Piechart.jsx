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
                            data: [12, 19, 3, 5, 2, 3],
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
            },
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
            }
        }
    }

    render() {
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
                    }
/>
            </div>
        )
    }
}

import React from 'react';
import {Line} from 'react-chartjs-2';

export default class Linechart extends React.Component {

    constructor(props){
        super(props)
        this.state ={
            LineData:{
                labels:  ['Jan', 'Feb', 'Mar', 'Aprl','May','Jun','July','Aug','Sep',
                'Oct', 'Nov','Dec'],
                datasets: [{
                label: 'Monthly services',
                data: [499,412,532,487,631,362,401,431,455,567,466,427],
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            pointBackgroundColor:'rgba(255, 206, 86, 0.5)',
                            pointBorderColor:'black',
                            borderColor:'rgba(255, 99, 132, 1)',
                            pointHoverRadius:20,
                            fill:true,
                        }]
            },
        }
    }

    render() {
        return (
            <div className = 'chart'>
                <Line
	                data={this.state.LineData}
	                width={600}
	                height={300}
	                options={{
                            maintainAspectRatio: false,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Services provided per month',
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
                            },
                            
                        }
                    }
/>
            </div>
        )
    }
}

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
                data: [0,0,0,0,0,0,0,0,0,0,0,0],
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                            pointBackgroundColor:'rgba(255, 206, 86, 0.5)',
                            pointBorderColor:'black',
                            borderColor:'rgba(255, 99, 132, 1)',
                            pointHoverRadius:20,
                            fill:true,
                        }]
            },
            dataFetched : 0
        }
    }

    async componentDidMount() {

        await this.getMonthlyServicesList(this.props.accessToken)
            .then((result) => {
                this.setState({BarData : result, dataFetched : 1});
                //console.log("result = ",result);
            });
    }

    async getMonthlyServicesList(accessToken) {

        const res = await fetch("https://expressservicebackend.herokuapp.com/admin/stats/getMonthlyServicesList",{
          method : "GET",
          headers : {
            "Authorization":"Bearer "+accessToken,
            "Content-Type" : "application/json"
          }
        });
    
        const data = await res.json();
    

        var tempData = this.state.LineData;
        if(data) {
            
            tempData.datasets[0].data = [data.Jan, data.Feb, data.Mar, data.Apr, data.May, data.Jun, data.Jul, data.Aug, data.Sep, data.Oct, data.Nov, data.Dec];
            
            return tempData;
        
        }
        return tempData;
    }

    render() {

        if(this.state.dataFetched === 1){

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
        }else {

            return <div className = 'chart'>
                    <h2>Services provided per Month</h2>
                </div>
        }
    }
}

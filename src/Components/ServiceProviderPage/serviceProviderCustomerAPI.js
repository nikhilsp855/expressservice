import emma from './images/emma.jpg'
import dwayne from "./images/dwayne.jpg"
import salman from "./images/salman.jpg"
import aksh1 from "./images/aksh1.webp"
import gal from "./images/gal.jpg"


const customerListStore = {

    customer : [

        {id:1, pic : emma, name: 'Emma Watson', address: 'Pune, Vasai road, Block no.16', date: '17/07/2020 - 20/09/2020',payment: 'Rs. 40,000',status:'green'},
        {id:2,pic : dwayne, name: 'Dwayne Johnson', address: 'Pune, Vasai road, Block no.16', date: '25/01/2021 - 15/08/2021',payment: 'Rs. 40,000',status:'yellow'},
        {id:3,pic : salman, name: 'Salman Khan', address: 'Pune, Vasai road, Block no.16', date: '20/03/2021 - 21/05/2021',payment: 'Rs. 40,000',status:'red'},
        {id:4,pic : aksh1, name: 'Akshay Kumar', address: 'Pune, Vasai road, Block no.16', date: '17/02/2021 - 20/04/2021',payment: 'Rs. 40,000',status:'green'},
        {id:5,pic : gal, name: 'Gal Gadot', address: 'Pune, Vasai road, Block no.16', date: '13/03/2021 - 20/09/2021',payment: 'Rs. 40,000',status:'red'},
    
        {id:6, pic : emma, name: 'six', address: 'Pune, Vasai road, Block no.16', date: '17/07/2020 - 20/09/2020',payment: 'Rs. 40,000',status:'green'},
        {id:7,pic : dwayne, name: 'seven', address: 'Pune, Vasai road, Block no.16', date: '25/01/2021 - 15/08/2021',payment: 'Rs. 40,000',status:'yellow'},
        {id:8,pic : salman, name: 'eight', address: 'Pune, Vasai road, Block no.16', date: '20/03/2021 - 21/05/2021',payment: 'Rs. 40,000',status:'red'},
        {id:9,pic : aksh1, name: 'nine', address: 'Pune, Vasai road, Block no.16', date: '17/02/2021 - 20/04/2021',payment: 'Rs. 40,000',status:'green'},
        {id:10,pic : gal, name: 'ten', address: 'Pune, Vasai road, Block no.16', date: '13/03/2021 - 20/09/2021',payment: 'Rs. 40,000',status:'red'},
    
    
        {id:11, pic : emma, name: 'Eleven', address: 'Pune, Vasai road, Block no.16', date: '17/07/2020 - 20/09/2020',payment: 'Rs. 40,000',status:'green'},
        {id:12,pic : dwayne, name: 'twelve', address: 'Pune, Vasai road, Block no.16', date: '25/01/2021 - 15/08/2021',payment: 'Rs. 40,000',status:'yellow'},
        {id:13,pic : salman, name: 'thirteen', address: 'Pune, Vasai road, Block no.16', date: '20/03/2021 - 21/05/2021',payment: 'Rs. 40,000',status:'red'},
        {id:14,pic : aksh1, name: 'fourteen', address: 'Pune, Vasai road, Block no.16', date: '17/02/2021 - 20/04/2021',payment: 'Rs. 40,000',status:'green'},
        {id:15,pic : gal, name: 'fifteen', address: 'Pune, Vasai road, Block no.16', date: '13/03/2021 - 20/09/2021',payment: 'Rs. 40,000',status:'red'}
    ],

    getCustomer : function() {

        return this.customer;
    }
}

export default customerListStore;
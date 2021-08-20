import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import './FormBooking.css';
import {useHistory} from "react-router-dom";
const FormBooking=()=> {
    const history = useHistory();
    let location = useLocation();
    const[item,setState]=useState([{}]);
    const[providers,setProvider]=useState();
    const[price,setPrice]=useState();
    const[name,setName]=useState();
    const[contact,setNumber]=useState();
    const[address,setAddress]=useState();
    const[date,setDate]=useState();
    const[time,setTime]=useState();
    const[service,setService]=useState([]);
    useEffect(() => {
        console.log(location.pathname); 
        console.log(location.state.price); 
        console.log(location.state.providers);
        console.log(location.state.item);
        setState(location.state.item);
        location.state.item.map((i)=>{
            setService(i.title);
        })
        setProvider(location.state.providers)
        setPrice(location.state.price)
     }, [location]);

     const onNamechange=(e)=>{
         let custname=e.target.value;
          setName(custname);
     }
     const onNumberChange=(e)=>{
        let custnumber=e.target.value;
         setNumber(custnumber);
    }
    const onAddressChange=(e)=>{
        let custaddress=e.target.value;
         setAddress(custaddress);
    }
    const onDateChange=(e)=>{
        let custdate=e.target.value;
         setDate(custdate);
    }
    const onTimeChange=(e)=>{
        let custtime=e.target.value;
         setTime(custtime)
    }

    
    const confirmBooking=(e)=>{
        e.preventDefault();
        
     fetch("http://localhost:4000/confirmbooking",{
      method : "POST",
      headers : {
        "Content-Type" : "application/json"
      },
      body : JSON.stringify({
        providers:providers,
        pendingCustomers:{
            name,
            address,
            date,
            price,
            service,
            contact,
            time
        }
      })
    })
    .then(response=>response.json())
    .then(data=>{
        if(data==="success")
        {
        alert("Congratulations!!! Your service is booked successfully!!")
        history.push("./")
        }
    })
    }
    return (
        <div>
            <div className="container2">
                <div className="book2">
                    <div className="description2">
                        <h1><strong>Book</strong> your Service</h1>
                        <p>
                            Express Service has your back for all the leaks you’re experiencing. Our services vary from fixes to new fittings, cleaning and other things that come under the expertise of a plumber. Given that the professional is booked for your preferred time frame, the price is calculated on the basis of working hours.
                        </p>

                        <ul>
                            <li>Super reliable service</li>
                            <li>Doorstep repair within 45 mins</li>
                            <li>Protection Against Damage </li>
                            <li>30 days post-service quarantee</li>
                        </ul>
                    </div>
                    <div className="form2">
                        <form onSubmit={confirmBooking}>
                            <div className="inpbox">
                                Full Name:
                                <span className="flaticon-user"></span>

                                <input type="text" placeholder="Enter Full Name" onChange={onNamechange}/>
                            </div>


                            <div className="inpbox">
                                Mobile:
                                <span className="flaticon-mobile"></span>
                                <input type="text" placeholder="Enter Contact no" onChange={onNumberChange} />
                            </div>

                            <div className="inpbox">
                                Address:
                                <span className="address"></span>
                                <input type="text" placeholder="Enter Location" onChange={onAddressChange}/>
                            </div>

                            <div className="inpbox">
                                Choose Date:
                                <span className="flaticon-calendar"></span>
                                <input type="date" placeholder="Booking Date" onChange={onDateChange} />
                            </div>




                            <div className="inpbox full">
                                Time Slot:
                                <span className="flaticon-slot"></span>
                                <select id="timeslot" name="timeslot" onChange={onTimeChange} >
                                    <option value="">&nbsp; &nbsp;Select Time</option>
                                    <option value="08:00AM-9:30AM">&nbsp; &nbsp;08:00AM-9:30AM</option>
                                    <option value="11:00AM-12:30PM">&nbsp; &nbsp;11:00AM-12:30PM</option>
                                    <option value="01:30PM-03:00PM">&nbsp; &nbsp;01:30PM-03:00PM</option>
                                    <option value="03:30PM-05:00PM">&nbsp; &nbsp;03:30PM-05:00PM</option>
                                </select>
                            </div>








                            <div className="inpbox">
                                Description:
                                <span className="description"></span>
                                <input type="text" placeholder="Describe your problem" />
                            </div>


                            <button className="subt">Submit</button>
                            <button className="rst">Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormBooking;

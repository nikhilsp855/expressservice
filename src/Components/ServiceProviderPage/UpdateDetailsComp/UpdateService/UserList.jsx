import React,{useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ListGroup,ListGroupItem,Button } from 'reactstrap'
import { GlobalContext } from '../Context/GlobalState'

async function getSubServices(accessToken) {

    const res = await fetch("https://expressservicebackend.herokuapp.com/serviceproviders/updateDetails",{
            method : "GET",
            headers : {
                "Authorization":"Bearer "+accessToken
            }
    });

    const data = await res.json();

    if(data) {

        console.log("data.subServices = ",data.subServices);
        return data.subServices;
    
    }
    return [];
}




export const UserList = (props) => {
    //const {removeUser} =useContext(GlobalContext);
    const [users, setData] = useState([]);
   // var temp=[];
    //const users = getSubServices(props.accessToken);
    useEffect(() => {
        getSubServices(props.accessToken)
          .then((response) => {
              setData(response);
             
            });
    }, []);

    async function removeUser(accessToken,id) {

        await fetch("https://expressservicebackend.herokuapp.com/serviceproviders/updateDetails/deleteSubService",{
                method : "POST",
                headers : {
                    "Authorization":"Bearer "+accessToken,
                    "Content-Type" : "application/json" 
                },
                body : JSON.stringify({
                    id : id
                })
        })
            .then(()=>{
                
                getSubServices(accessToken)
                    .then((response)=>setData(response));
                //UserList({accessToken : accessToken});
            })
    }

    return (
        <ListGroup className='mt-4'>
            {users.map(user=>(

                <ListGroupItem className='d-flex flex-column align-items-start'>
                    <strong>Service Name:     {user.name} </strong>
                    <strong>Service Cost:     {user.cost} Rs </strong>
                    <strong>Service time:     {user.time} days </strong>
                    <div className='mt-2'>
                        <Link className="btn btn-warning mr-5" 
                        to={`/serviceprovider/updateDetails/edit/${user.id}`}>Edit</Link>

                        <Button onClick = {()=>removeUser(props.accessToken,user.id)}
                        className='btn btn-danger '>Delete</Button>
                    </div>
                </ListGroupItem>

            ))}
            
        </ListGroup>
    )
}

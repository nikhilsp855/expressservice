import React,{useContext, useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ListGroup,ListGroupItem,Button } from 'reactstrap'
import { GlobalContext } from '../Context/GlobalState'

async function getSubServices(accessToken) {

    const res = await fetch("http://localhost:4000/serviceproviders/updateDetails",{
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
    const {removeUser} =useContext(GlobalContext);
    const [users, setData] = useState([]);
    //const users = getSubServices(props.accessToken);
    useEffect(() => {
        getSubServices(props.accessToken)
          .then((response) => setData(response));
      }, []);

    return (
        <ListGroup className='mt-4'>
            {users.map(user=>(

                <ListGroupItem className='d-flex'>
                    <strong>Service Name:     {user.name} </strong>
                    <strong>Service Cost:     {user.cost} Rs </strong>
                    <strong>Service time:     {user.time} days </strong>
                    <div className='mt-auto'>
                        <Link className="btn btn-warning " 
                        to={`/serviceprovider/updateDetails/edit/${user.id}`}>Edit</Link>

                        <Button onClick = {()=>removeUser(user.id)}
                        className='btn btn-danger '>Delete</Button>
                    </div>
                </ListGroupItem>

            ))}
            
        </ListGroup>
    )
}

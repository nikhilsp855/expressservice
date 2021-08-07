import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { ListGroup,ListGroupItem,Button } from 'reactstrap'
import { GlobalContext } from '../Context/GlobalState'

export const UserList = () => {
    const {users,removeUser} =useContext(GlobalContext);
    return (
        <ListGroup className='mt-4'>
            {users.map(user=>(

                <ListGroupItem className='d-flex'>
                    <strong>Service Name:     {user.name} </strong>
                    <strong>Service Cost:     {user.cost} Rs </strong>
                    <strong>Service time:     {user.time} days </strong>
                    <div className='ml-auto'>
                        <Link className="btn text-warning " 
                        to={`/serviceprovider/updateDetails/edit/${user.id}`}>Edit</Link>

                        <Button onClick = {()=>removeUser(user.id)}
                        className='text-danger'>Delete</Button>
                    </div>
                </ListGroupItem>

            ))}
            
        </ListGroup>
    )
}

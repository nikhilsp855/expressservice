import React,{useState,useContext} from 'react'
import { Form,FormGroup,Label,Input,Button } from 'reactstrap'
import {Link,useHistory} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'
import { v4 as uuid } from 'uuid'


export const AddUser = () => {

    const [name,setName]=useState('');
    const [cost,setCost]=useState('');
    const [time,setTime]=useState('');

    const {addUser} =useContext(GlobalContext);
    const history = useHistory();

    const onSubmit = ()=>{
        const newUSer = {
            id: uuid(), name , cost, time
        }
        addUser(newUSer)
        history.push('/serviceprovider/updateDetails/')
    }


    const onNameChange = (evt)=>{
        setName(evt.target.value);
    }

    const onCostChange = (evt)=>{
        setCost(evt.target.value);
    }

    const onTimeChange = (evt)=>{
        setTime(evt.target.value);
    }

    return (
        <>
        <h3 className= 'card card-header'>Add New Service </h3>
        <Form onSubmit={onSubmit}>
            <FormGroup>
                <Label>Service Name</Label>
                <Input type='text' name='name' value ={name} onChange={onNameChange} placeholder='Enter Service' required></Input>
                <Label>Cost</Label>
                <Input type='text' name='cost' value ={cost} onChange={onCostChange} placeholder='Enter Cost' required></Input>
                <Label>Required Days</Label>
                <Input type='text' name='time' value ={time} onChange={onTimeChange} placeholder='Enter days' required></Input>
            </FormGroup>
            <Button type='submit'>Submit</Button>
            <Link to='/serviceprovider/updateDetails/' className ="btn btn-danger ml-2" >Cancel</Link>
        </Form>
        </>
    )
}

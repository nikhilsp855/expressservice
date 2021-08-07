import React,{useState,useEffect,useContext} from 'react'
import {Link,useHistory} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'
import { Form,FormGroup,Label,Input,Button } from 'reactstrap'

export const EditUser = (props) => {

    const [selectedName,setSelectedName]=useState({
        id:'',name:''
    });
    const [selectedCost,setSelectedCost]=useState({
        id:'',cost:''
    });
    const [selectedTime,setSelectedTime]=useState({
        id:'',time:''
    });
    const {users,editUser} =useContext(GlobalContext);
    const history = useHistory();
    const currentUserID = props.match.params.id;

    useEffect(()=>{
        const userId =currentUserID;
        const selectedName = users.find(user => user.id === userId );
        const selectedCost = users.find(user => user.id === userId );
        const selectedTime = users.find(user => user.id === userId );

        setSelectedName(selectedName);
        setSelectedCost(selectedCost);
        setSelectedTime(selectedTime);

    },[currentUserID,users])

    const onSubmitName = ()=>{
        editUser(selectedName);
        history.push('/serviceprovider/updateDetails/')
    }

    const onSubmitCost = ()=>{
        editUser(selectedCost);
        history.push('/serviceprovider/updateDetails/')
    }

    const onSubmitTime = ()=>{
        editUser(selectedTime);
        history.push('/serviceprovider/updateDetails/')
    }

    const onNameChange = (evt)=>{
        setSelectedName({ ...selectedName, [evt.target.name]: evt.target.value })
    }

    const onCostChange = (evt)=>{
        setSelectedCost({...selectedCost,[evt.target.name] : evt.target.value })
    }

    const onTimeChange = (evt)=>{
        setSelectedTime({...selectedTime,[evt.target.name] : evt.target.value })
    }

    return (
        <>
        <h3 className= 'card card-header'>Edit Service Details</h3>
        <Form onSubmit={onSubmitName/*,onSubmitCost,onSubmitTime*/ }>
            <FormGroup>
                <Label>Service Name</Label>
                <Input type='text' name='name' value= {selectedName.name} onChange={onNameChange} 
                placeholder='Enter Service'></Input>
            </FormGroup>
            <Button className="btn btn-secondary" type='submit'>Edit Service Name</Button>
        </Form>
        <Form onSubmit={onSubmitCost }>
            <FormGroup>
                <Label>Cost</Label>
                <Input type='text' name='cost' value= {selectedCost.cost} onChange={onCostChange} 
                placeholder='Enter Cost'></Input>
            </FormGroup>
            <Button className="btn btn-secondary" type='submit'>Edit Service Cost</Button>
        </Form>
        <Form onSubmit={onSubmitTime }>
            <FormGroup>
                <Label>Required Days</Label>
                <Input type='text' name='time' value= {selectedTime.time} onChange={onTimeChange} placeholder='Enter days'></Input>
            </FormGroup>
            <Button className="btn btn-secondary" type='submit'>Edit Service Time</Button>
        </Form>
            <Link to='/serviceprovider/updateDetails/' className ="btn btn-danger ml-2">Cancel</Link>
        </>
        
    )
}

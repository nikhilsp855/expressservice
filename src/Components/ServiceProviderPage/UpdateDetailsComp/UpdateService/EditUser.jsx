import React,{useState,useEffect,useContext} from 'react'
import {Link,useHistory,useParams} from 'react-router-dom'
import { GlobalContext } from '../Context/GlobalState'
import { Form,FormGroup,Label,Input,Button } from 'reactstrap'

async function editSubService(accessToken,editedField,id) {

    console.log("newUser at addSubService = ",editedField)
    await fetch("https://expressservicebackend.herokuapp.com/serviceproviders/updateDetails/editSubService",{
            method : "POST",
            headers : {
                "Authorization":"Bearer "+accessToken,
                "Content-Type" : "application/json" 
            },
            body : JSON.stringify({
                editedField : editedField,
                id : id
            })
    });
}

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

export const EditUser = (props) => {

    const [selectedName,setSelectedName]=useState({});
    const [selectedCost,setSelectedCost]=useState({});
    const [selectedTime,setSelectedTime]=useState({});
    const [users, setData] = useState([]);
    const  {id} = useParams();

    useEffect(() => {
        console.log("PROPS = ",props);
        getSubServices(props.accessToken)
          .then((response) => {
                setData(response);
                console.log("response = ",response);
                const userId =id;
                const selectedName = response.find(user => user.id === userId );
                const selectedCost = response.find(user => user.id === userId );
                const selectedTime = response.find(user => user.id === userId );
                
                setSelectedName({name : selectedName.name});
                setSelectedCost({cost : selectedCost.cost});
                setSelectedTime({time : selectedTime.time});
            })
          /*.then(() => {
            const userId =id;
            console.log("id = ",id,",users = ",users);
            const selectedName = users.find(user => user.id == userId );
            const selectedCost = users.find(user => user.id == userId );
            const selectedTime = users.find(user => user.id == userId );
    
            setSelectedName({name : selectedName.name});
            setSelectedCost({cost : selectedCost.cost});
            setSelectedTime({time : selectedTime.time});
          })*/
      }, []);
    //const {users,editUser} =useContext(GlobalContext);
    const history = useHistory();
    //const currentUserID = props.match.params.id;

    /*useEffect(()=>{
        const userId =currentUserID;
        const selectedName = users.find(user => user.id === userId );
        const selectedCost = users.find(user => user.id === userId );
        const selectedTime = users.find(user => user.id === userId );

        setSelectedName(selectedName);
        setSelectedCost(selectedCost);
        setSelectedTime(selectedTime);

    },[currentUserID,users])
*/
    const onSubmitName = ()=>{
        //editUser(selectedName);
        console.log("selectedName = ",selectedName," ,accessToken : ",props.accessToken);
        editSubService(props.accessToken,selectedName,id)
            .then(history.push('/serviceprovider/updateDetails/'))
    }

    const onSubmitCost = ()=>{
        //editUser(selectedCost);
        console.log("selectedCost = ",selectedCost," ,accessToken : ",props.accessToken);
        editSubService(props.accessToken,selectedCost,id)
            .then(history.push('/serviceprovider/updateDetails/'))
    }

    const onSubmitTime = ()=>{
        //editUser(selectedTime);
        console.log("selectedTime = ",selectedTime," ,accessToken : ",props.accessToken);
        editSubService(props.accessToken,selectedTime,id)
            .then(history.push('/serviceprovider/updateDetails/'))
    }

    const onNameChange = (evt)=>{
        setSelectedName({[evt.target.name]: evt.target.value })
    }

    const onCostChange = (evt)=>{
        setSelectedCost({[evt.target.name] : evt.target.value })
    }

    const onTimeChange = (evt)=>{
        setSelectedTime({[evt.target.name] : evt.target.value })
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

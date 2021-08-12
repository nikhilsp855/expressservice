import React from 'react'
import  Itemcard  from './Itemcard'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import data1 from './data1'

const Cart = (props) => {
    console.log(props.states)
    //var providerdetails=props;
   // console.log(providerdetails.length)
   var count=1;
    props.states.map((item)=>{
        item.id=count;
        count=count+1;
    })
    const options=props.states.map((items)=>(
        { id:items.id,
            title: items.name,
            price:items.cost
    }))
    console.log(options)
    return (
        <>
        <h1 className="text-center mt-3">All Services</h1>
        <section className="py-4 container">
            <div className="row justify-content-center">
                {options.map((item,index)=>{
                    console.log(item)
                    return(
                        <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} key={index}/>

                    )
                })}

            </div>
        </section>
            
        </>
    )
}

export default Cart

import React from 'react'
import  Itemcard  from './Itemcard'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import data1 from './data1'

const Cart = () => {
    return (
        <>
        <h1 className="text-center mt-3">All Services</h1>
        <section className="py-4 container">
            <div className="row justify-content-center">
                {data1.serviceData.map((item,index)=>{

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

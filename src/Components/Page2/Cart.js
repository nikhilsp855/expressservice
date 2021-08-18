import React,{useState} from 'react'
import Itemcard from './Itemcard'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Cart.css'
import { useCart } from "react-use-cart"
import MyCart from './MyCart'


const Cart = (props) => {
    console.log(props.states)
    console.log(props.providers)
    var count = 1;
    props.states.map((item) => {
        item.id = count;
        count = count + 1;
    })
    const options = props.states.map((items) => (
        {
            id: items.id,
            title: items.name,
            price: items.cost
        }))
    console.log(options)

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const {
        totalUniqueItems,
    } = useCart();
    return (
        <>
            <button className="addcartbtn" onClick={handleClick}><i class="fas fa-shopping-cart"></i>
                ({totalUniqueItems} )</button>

            {(() => {
                if (click == true) {
                    return <MyCart providers={props.providers}/>
                }
                else {

                    return (
                        <>

                            <h1 className="text-center mt-3">All Services</h1>
                            <section className="py-4 container">
                                <div className="row justify-content-center">
                                    {options.map((item, index) => {
                                        console.log(item)
                                        return (
                                            <Itemcard img={item.img} title={item.title} desc={item.desc} price={item.price} item={item} providers={props.providers} key={index} />

                                        )
                                    })}

                                </div>
                            </section>

                        </>

                    )
                }
            })()}
        </>
    )
}

export default Cart

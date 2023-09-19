import { useEffect, useState } from "react";
import Countdown from "react-countdown";
import DiscountItem from "./DiscountItem";

export default function Comdown() {

    const [discount , setDiscount] = useState([]);
    useEffect(()=> {
        fetch('Discount.json')
        .then(res => res.json())
        .then(data => setDiscount(data))
    },[])


    return (
        <div className="p-10 flex flex-wrap justify-between items-center">
            <div className="lg:w-2/12">
                <h2 className="text-2xl">Deals and offers</h2>
                <br />
                <Countdown className="text-4xl bg-blue-400 rounded text-white" date={Date.now() + 1554550000} />
            </div>
            <div className="grid md:grid-cols-5 grid-cols-2 gap-4 w-10/12">
                {
                    discount.map(discount => <DiscountItem key={discount.id} discount={discount}></DiscountItem>)
                }
            </div>


        </div>
    )
}

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
        <div className="xl:p-10 p-4 flex md:flex-wrap flex-col md:flex-row gap-4 md:gap-0 justify-between items-center">
            <div className="lg:w-2/12">
                <h2 className="text-4xl text-center text-red-500">Offers Time</h2>
                <br />
                <Countdown className="text-4xl bg-blue-400 rounded text-white" date={Date.now() + 1554550000} />
            </div>
            <div className="grid md:grid-cols-4 lg:grid-cols-5 grid-cols-1 gap-4 lg:w-10/12 w-full">
                {
                    discount.map(discount => <DiscountItem key={discount.id} discount={discount}></DiscountItem>)
                }
            </div>


        </div>
    )
}

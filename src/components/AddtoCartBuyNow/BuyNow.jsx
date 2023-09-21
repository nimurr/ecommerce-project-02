import { useLoaderData } from "react-router-dom"


export default function BuyNow() {
    const product = useLoaderData();
    const handlebuyNowBtn = () =>{
       return swal("Successful ", "You clicked the button!", "success")
    }
    return (
        <div className="w-8/12 mx-auto">

            <div className="flex justify-between items-center my-4 bg-blue-200 p-6 rounded">
                <img className="w-20" src={product.image} alt="" />
                <div className="text-center">
                    <h3 className="text-4xl font-semibold ">${product.price}</h3>
                    <h2 className="text-xl font-semibold">{product.title}</h2>
                </div>
                <button onClick={handlebuyNowBtn} className="bg-blue-600 text-white px-4 py-2 rounded mt-2">Pay Now</button>
            </div>
        </div>
    )
}

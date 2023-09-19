import { useEffect, useState } from "react"
import SinlgProduct from "./SinlgProduct";


export default function Product() {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch('Product.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    console.log(product)
    return (
        <div className="w-11/12 mx-auto py-12">
            <h2 className="text-4xl font-semibold mb-6">All Project</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
                {
                    product.map(pro => <SinlgProduct key={pro.id} pro={pro}></SinlgProduct>)
                }
            </div>
        </div>
    )
}

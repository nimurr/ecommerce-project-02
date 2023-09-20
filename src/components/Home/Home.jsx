import { useLoaderData } from "react-router-dom";
import Comdown from "./Comdown";
import Product from "./Product";
import Slider from "./Slider";

export default function Home() {
    const products = useLoaderData();
    return (
        <div>
            <Slider></Slider>
            <Comdown></Comdown>
            <Product products={products}></Product>
        </div>
    )
}

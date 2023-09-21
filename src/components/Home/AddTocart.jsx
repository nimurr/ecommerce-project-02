import { NavLink, useLoaderData } from "react-router-dom"

 
export default function AddTocart() {

    const cartItem = useLoaderData();
    console.log(cartItem)
  return (
    <div className="w-6/12 mx-auto my-5 text-center border-2 p-4 bg-blue-100">
        <img className="w-32 mx-auto" src={cartItem.image} alt="" />
        <h2 className="my-2 text-xl font-semibold">{cartItem.title.slice(0,25)}</h2>
        <h2 className="text-5xl font-bold ">${cartItem.price}</h2>
        <p className="text-sm">{cartItem.description}</p>
        <NavLink to={`/buyNow/${cartItem.id}`} className="bg-blue-600 text-white px-4 py-1 rounded mt-2"><i className='bx bx-cart-download' ></i> Buy Now</NavLink>
        <br />
        <br />
        <NavLink to='/' className='bg-blue-600 text-white px-4 py-2 rounded mt-2'><i className='bx bxs-home-alt-2'></i> Go Home</NavLink>
    </div>
  )
}

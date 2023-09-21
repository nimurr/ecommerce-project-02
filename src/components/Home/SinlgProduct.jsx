 
 import PropTypes from 'prop-types'; 
import { NavLink } from 'react-router-dom';

export default function SinlgProduct({pro}) {
  console.log(pro)
    const {title,image,price} = pro;
  return (
    <div className="border p-2 flex flex-col items-center justify-between">
        <img className="w-6/12 h-40 mx-auto mb-3" src={image} alt="" />
        <h2 className="text-xl font-semibold text-center">{title.slice(0,20)}</h2>
        <p className="text-3xl font-semibold text-center"><span className="text-xl">${price}</span></p>
        <ul className="flex justify-center text-orange-400 text-xl">
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star-half' ></i></li> 
            <li className='text-black ml-2'>{pro.rating.rate} <small className='text-[14px]'>({pro.rating.count})</small></li>
        </ul>
        <NavLink to={`/cart/${pro.id}`} className="w-full text-center bg-blue-600 p-2 mt-2 text-white font-semibold">Details</NavLink>
    </div>
  )
}

SinlgProduct.propTypes = {
    pro: PropTypes.object
}
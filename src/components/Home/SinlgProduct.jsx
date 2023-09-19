 
 import PropTypes from 'prop-types'; 

export default function SinlgProduct({pro}) {
    const {name,img,price,discount_price} = pro;
  return (
    <div className="border p-2">
        <img className="w-6/12 h-40 mx-auto mb-3" src={img} alt="" />
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p className="text-3xl font-semibold text-center">${discount_price} <del className="text-xl">${price}</del></p>
        <ul className="flex justify-center text-orange-400 text-xl">
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star'></i></li>
            <li><i className='bx bxs-star-half' ></i></li>
        </ul>
        <button className="w-full bg-blue-600 p-2 mt-2 text-white font-semibold">Buy Now</button>
    </div>
  )
}

SinlgProduct.propTypes = {
    pro: PropTypes.object
}
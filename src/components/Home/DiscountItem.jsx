 
export default function DiscountItem({discount}) {
    const {name,img,discoun} = discount;
  return (
    <div className="border p-2">
        <img className="h-40 w-8/12 mx-auto" src={img} alt="" />
        <h2 className="text-center text-xl font-semibold my-2">{name}</h2>
        <h3 className="text-center text-red-600 text-xl font-bold">-{discoun}%</h3>
    </div>
  )
}

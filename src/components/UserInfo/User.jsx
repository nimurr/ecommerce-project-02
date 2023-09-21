import { useLoaderData } from "react-router-dom"
import List from "./List";

export default function User() {

  const orederList = useLoaderData(); 

  return (
    <div className="w-5/12 mx-auto my-10">
      <h2 className="text-center text-4xl text-blue-600">User Info</h2>
      <div className="text-center my-10 border-2 py-10 rounded w-8/12 mx-auto">
        <img className="h-24 w-24 rounded-full mx-auto border-4 border-blue-500" src="https://i.ibb.co/Db3hWb3/1686378915854-2-1.png" alt="" />
        <h2 className="text-xl font-semibold my-2">Nimur Rahnam Nerob</h2>
        <p>Phone : +88 01708784404</p>
        <p>Gmail: nimurnerob404@gmail.com</p>
        <p>Address : Thakurgaon sadar , Thakurgaon </p>
        <button className="mt-4 bg-blue-600 px-4 py-2 rounded text-white">Edit Profile</button>
      </div>
      <div>
        <h2 className="text-center text-4xl text-blue-600">Order List</h2>

        <div className="overflow-x-auto my-4">
          <table className="table table-zebra">
            {/* head */}
            <thead className="border-2"> 
              <tr className="border-2 text-sm font-semibold  text-blue-600">
                <th className="border-2">SL</th>
                <th className="border-2">Product Name</th>
                <th className="border-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                orederList.map(order => <List order={order}></List>)
               
               }

              
              
            </tbody>
          </table>
        </div>

      </div>
    </div>
  )
}

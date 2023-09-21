import { useState } from "react";


export default function Massage() {
    
    const [massage, setMassage] = useState('');

    const handleMessageSubmit = (e) => {
        e.preventDefault();
        let input = e.target[0].value;
        setMassage(input)

        if (massage !== '') {

            const message = document.getElementById('message');
            const div = document.createElement('div');
            div.innerHTML = `
                    <h2 class="bg-gray-400 inline text-end text-white py-1 px-2 text-sm message-border-radius2">${massage}</h2>
                    <img class="w-10 inline float-right rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfVYXuyABJpg2S1xgFB14nO6R2xa85GnIhVrfd_UmHt_EYdXwh0q3iEA-QlGXNzdehhA&usqp=CAU" alt="" />
                `;
            message.appendChild(div)
            e.target[0].value = '';
        }

    }





    return (
        <div>
            <div className="lg:w-[400px] bg-blue-400 mx-auto p-2 my-2 rounded">
                <h2 className="text-center font-semibold text-xl py-2 text-white">Contact with Message</h2>
                <div className="bg-white p-2 rounded" >
                    <div>

                        <div className="flex gap-2 items-center mb-1" >
                            <img className="w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4EVuS__gOuC8rwulSJL5iQGIKjgrcMStCO_yzOoummJ1iEk7uWDw7HR5o9EPNmVrKho&usqp=CAU" alt="" />
                            <h2 className="bg-blue-700 text-white py-1 px-2 text-sm message-border-radius">Seller Message</h2>
                        </div>
                        <div className="flex gap-2 items-center justify-end mb-1">
                            <h2 className="bg-gray-400 text-white py-1 px-2 text-sm message-border-radius2">Customer Message</h2>
                            <img className="w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfVYXuyABJpg2S1xgFB14nO6R2xa85GnIhVrfd_UmHt_EYdXwh0q3iEA-QlGXNzdehhA&usqp=CAU" alt="" />
                        </div>
                        <div className="flex gap-2 items-center mb-1">
                            <img className="w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH4EVuS__gOuC8rwulSJL5iQGIKjgrcMStCO_yzOoummJ1iEk7uWDw7HR5o9EPNmVrKho&usqp=CAU" alt="" />
                            <h2 className="bg-blue-700 text-white py-1 px-2 text-sm message-border-radius">Seller Message</h2>
                        </div>
                        <div className="flex gap-2 items-center justify-end mb-1">
                            <h2 className="bg-gray-400 text-white py-1 px-2 text-sm message-border-radius2">Customer Message</h2>
                            <img className="w-10 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVfVYXuyABJpg2S1xgFB14nO6R2xa85GnIhVrfd_UmHt_EYdXwh0q3iEA-QlGXNzdehhA&usqp=CAU" alt="" />
                        </div>

                        <div className="flex flex-col gap-4 items-end justify-end my-4" id="message">

                        </div>

                    </div>


                    <form onSubmit={handleMessageSubmit} >
                        <label htmlFor="" className="border-2 w-full flex justify-between rounded overflow-hidden">
                            <input className="p-2 w-10/12 outline-none" type="text" placeholder="Message now" />
                            <button className="bg-blue-600 px-4"><i className='bx bx-send text-xl text-white'></i></button>
                        </label>
                    </form>

                </div>
            </div>
        </div>
    )
}

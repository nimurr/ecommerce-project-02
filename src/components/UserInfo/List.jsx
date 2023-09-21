
export default function List({order}) {
    console.log(order)
    return (
            <tr className="border-2">
                <th className="border-2">{order.id}</th>
                <td className="border-2">{order.title.slice(0,20)}</td>
                <td className="border-2"><h2>${order.price}</h2></td>
            </tr>
    )
}

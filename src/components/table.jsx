import { orderData } from "../data";
import TableTop from "./tabelTop";

export default function Table() {
    return (
        <div>
            <div>
                <TableTop />
            </div>
            <div className=" relative overflow-x-auto">
                <table className="table-auto w-full">
                    <thead>
                        <tr className="">
                            <th  scope="col " className="px-6 py-3 font-medium">Order ID</th>
                            <th  scope="col " className="px-6 py-3 font-medium">Status</th>
                            <th  scope="col " className="px-6 py-3 font-medium">Transaction ID</th>
                            <th  scope="col " className="px-6 py-3 font-medium">Refund Date</th>
                            <th  scope="col " className="px-6 py-3 font-medium">Order Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderData.map((order) => (
                            <tr key={order.id} className="text-center bg-white border-b ">
                                <td className="px-6 py-4 font-medium text-blue-700 whitespace-nowrap">#{order.id}</td>
                                <td className="text-black-600  place-items-center grid ">
                                    <div className="flex items-center  align-middle  gap-2 h-10 w-32  ">
                                     {order.status === "Successful" ? (
        
                                    <div className="h-2.5 w-2.5 rounded-full bg-green-500" />
                                     ) : order.status === "Processing" ? (
                                     <div className="h-2.5 w-2.5 rounded-full bg-gray-500" />
                                      ) : order.status === "Failed" ? (
                                    <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                                       ) : null}
                                    <span>{order.status}</span>
                                     </div>
                                </td>

                                <td >{order.transactionID}</td>
                                <td>{order.refundDate}</td>
                                <td className="">{order.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

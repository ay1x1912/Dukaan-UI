export default function Transactions({payouts , refunds}){
    return (
        <div className=" m-6">
             <div className=" mt-3  font-semibold  text-2xl">
                  Transactions | This Month
            </div>
            <div className="flex  pl-0.5">
                <button className="border-2  h-10 w-40 mt-4  pb-1  text-gray-400 bg-gray-200 text-xl rounded-2xl">Payouts    ({(payouts)})</button>
                <button className="  h-10 w-40 m-4  pb-1  text-white-700  bg-blue-700 rounded-2xl">Redunds    ({refunds})</button>
            </div>
        
        </div>
    )
}
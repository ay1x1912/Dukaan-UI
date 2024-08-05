export default function BlueCard({ amount, orderCount }) {
    return (
        <div className="rounded   ">
                <div className="bg-blue-700   text-white-700  mt-5  ml-4 p-5 grid grid-rows-3">
            

            <div className="text-grey-700  text-xl  flex  pt-4  text-center  ">Next payout
              <div className="pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                < path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
              </svg>
              </div>
             
              </div><br />
             
            <div className="flex justify-between  ">
                <div className="font-semibold text-3xl" >₹{amount}</div>
                {orderCount? <div className="flex   underline  cursor-pointer text-white">{orderCount} orders(s) <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
             </svg>
                 </div>:null}
            </div>
          </div>
          <div className="bg-blue-800   text-xl py-2 px-6 text-sm text-white-700 flex justify-between ml-4">
            <div >Next payout date:</div>
           <div>Today, 04:00 PM</div>
          </div>
        </div>
        
    );
}

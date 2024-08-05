import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RevenueCard from './components/RevenueCaed'
import BlueCard from './components/blueCard'
import Navbar from './components/navbar'
import Overview from './components/overview'
import Transactions from './components/transtions'
import Table from './components/table'
import SideBar from './components/sidebar'
import Fotter from './components/fotter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div> 
      <SideBar/>
        <div className='ml-64'>
        <div className='    border '>
       
       <Navbar/>
     </div >
     <div className='   mt-7 ml- mr-2'><Overview/></div>
     <div className='    grid grid-cols-3 m-2  '>
         <BlueCard amount={"2,312.23"} orderCount={3}/> 
         <RevenueCard title={"Amount pending"} amount={"92,312.20"}  orderCount={13}/>
         <RevenueCard title={"Amount Processed"} amount={" 23,92,312.19"}  orderCount={13}/>
     </div>
     <div><Transactions payouts={22} refunds={6}/></div>
     <div><Table/></div>
        <div className='mt-4'><Fotter/></div>
        </div>
    </div>
  )
}

export default App

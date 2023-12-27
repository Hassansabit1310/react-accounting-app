import React, { useState } from 'react'
import Expenses from './expenses'
import Addparticular from './addparticular'

const Addexpense=(props)=> {
  const [date,setDate]=useState('')
  const [particular, setParticular]=useState('')
  const [amount, setAmount]=useState(0)
  const [receivedAmount,setReceivedAmount]=useState(0)
  const [expenses, setExpenses] = useState([]);

  const {particulars}=props

const handleAddExpenses=()=>{
  const newExpenses={
    date:date,
    expense:{
      particular:particular,
      amount:parseInt(amount),
      receivedAmount:parseInt(receivedAmount)
    }
  };

  setExpenses([...expenses,newExpenses])

  setDate('');
  setParticular('');
  setAmount('');

  
}

console.log('expense',expenses);
  return (
    
    <div class='flex flex-col space-y-4'>
      <form class='flex space-x-4'>
      <div class='flex-auto w-32'>
            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Date</label>
            <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
      <div class='flex-auto w-32'>
            <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Particular</label>
            <input type="text" value={particular} onChange={(e)=>setParticular(e.target.value)} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required/>
        </div>
        <div class='flex-auto w-32'> 
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Amount</label>
            <input type="text" value={amount} onChange={(e)=>{setAmount(e.target.value)}} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <div class='flex-auto w-32'> 
            <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Received Amount</label>
            <input type="text" value={receivedAmount} onChange={(e)=>{setReceivedAmount(e.target.value)}} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required/>
        </div>
        <button onClick={()=>{handleAddExpenses()}} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

      </form>


        
    <Expenses expenses={expenses} particulars={particulars}/>
    </div>
    
  )
}

export default Addexpense
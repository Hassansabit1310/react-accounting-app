import React, { useState } from 'react'
import Addparticular from './addparticular';

function Expenses(props) {
    const {expenses}=props
    const {particulars}=props
    console.log('ex',expenses);
    console.log('p',particulars);

    let expensesum=0
    let receivedsum=0

    expenses.map((item)=>expensesum+=item.expense.amount)
    expenses.map((item)=>receivedsum+=item.expense.receivedAmount)

    console.log(expensesum);

console.log(particulars);

  return (

  
    
    <div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Date
                </th>
                <th scope="col" class="px-6 py-3">
                   Particular
                </th>
                <th scope="col" class="px-6 py-3">
                    Amount
                </th>
                <th scope="col" class="px-6 py-3">
                    Received Amount
                </th>

            </tr>
        </thead>
        <tbody>
           {
            expenses.map((expense,index)=>(
                <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {expense.date}

                </th>
                <td class="px-6 py-4">
                    {expense.expense.particular}
                </td>
                <td class="px-6 py-4">
                {expense.expense.amount}
                </td>
                <td class="px-6 py-4">
                {expense.expense.receivedAmount}
                </td>

            </tr>
            ))
           }
        </tbody>
        <tbody>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                 Total Received: {receivedsum}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                Total Spent : {expensesum}
                </th>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                Balance:{receivedsum-expensesum}
                </th>
            </tr>
        </tbody>
    </table>
   
</div>


  )
}

export default Expenses
import React, { useState } from 'react'

function Expenses(props) {
    const {expenses}=props
    console.log('ex',expenses);

    let sum=0

    expenses.map((item)=>sum+=item.expense.amount)

    console.log(sum);



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
            </tr>
            ))
           }
        </tbody>
        <tbody>
            <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                    Total: {sum}
                </th>
            </tr>
        </tbody>
    </table>
</div>

  )
}

export default Expenses
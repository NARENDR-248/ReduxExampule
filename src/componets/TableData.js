import React from 'react'
import { useSelector } from 'react-redux'


const TableData = () => {
    const store=useSelector((store)=>store.data)
    console.log(store)
  return (
    <div className='bg-cyan-800 flex justify-center items-center h-screen'>
        <table className='shadow-2xl font-[poppins] border-2 border-cyan-200 w-6/12'>
            <thead className='text-white'>
                <tr>
                    <th className='py-4 bg-cyan-800'>name</th>
                    <th className='py-4 bg-cyan-800'>age</th>
                    <th className='py-4 bg-cyan-800'>email</th>
                </tr>
            </thead>
            <tbody className='text-cyan-900 text-center'>
                {
                    store.map((d)=>{
                        return(
                            <tr className='bg-cyan-400 hover:bg-cyan-100 hover:scale-110 duration-300 cursor-pointer'>
                                <td className='py-3 px-4'>{d.name}</td>
                                <td className='py-3 px-4'>{d.age}</td>
                                <td className='py-3 px-4'>{d.email}</td>
                            </tr>
                        )
                    })
                }
                
                

            </tbody>
        </table>
      
    </div>
  )
}

export default TableData

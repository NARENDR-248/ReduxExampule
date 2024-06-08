import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const TableData = () => {
    const store = useSelector((store) => store.data);

    return (
        <div className='bg-cyan-800 flex justify-center items-center h-screen'>
            <table className='shadow-2xl font-[poppins] border-2 border-cyan-200 w-6/12'>
                <thead className='text-white'>
                    <tr>
                        <th className='py-4 bg-cyan-800'>Name</th>
                        <th className='py-4 bg-cyan-800'>Email</th>
                        <th className='py-4 bg-cyan-800'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-cyan-900 text-center'>
                    {store.map((d, index) => (
                        <tr key={index} className='bg-cyan-400 hover:bg-cyan-100 hover:scale-110 duration-300 cursor-pointer'>
                            <td className='py-3 px-4'>{d.name}</td>
                            <td className='py-3 px-4'>{d.email}</td>
                            <td className='py-3 px-4'>
                               <Link to='/edit'>  <button className='bg-cyan-700 p-2 rounded-xl shadow-lg px-5 py-2 text-white mr-2'>
                                    Edit
                                </button></Link> 
                               
                                
                                <button className='bg-cyan-700 p-2 rounded-xl shadow-lg px-5 py-2 text-white'>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableData;

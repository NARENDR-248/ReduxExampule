import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full shadow-2xl flex justify-between items-center border-black border-2 mx-auto p-4 bg-white'>
      <h2 className='font-bold text-2xl text-gray-800'>CRUD Application</h2>
      <Link to="/adduser">
        <button className='rounded-md shadow-xl bg-teal-700 text-white px-6 py-3 text-lg font-bold hover:bg-teal-600 transition duration-300'>
          Create User
        </button>
      </Link>
    </div>
  );
}

export default Header;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Adduser } from './store/UserSlice';
import { useNavigate } from 'react-router-dom';

const CreateUsers = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(Adduser({ name, email }));
        navigate("/");
    };

    return (
        <div className="w-full p-5 flex justify-center items-center h-screen">
            <form
                className="flex flex-col w-1/3 space-y-4 bg-white p-8 rounded-lg shadow-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add User</h2>
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-lg text-gray-700">Username</label>
                    <input
                        type="text"
                        placeholder="Enter username"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="flex flex-col">
                    <label className="mb-2 font-bold text-lg text-gray-700">User Email</label>
                    <input
                        type="email"
                        placeholder="Enter user email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Create User
                </button>
            </form>
        </div>
    );
};

export default CreateUsers;

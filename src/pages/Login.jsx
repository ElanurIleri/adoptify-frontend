import React, { useState } from 'react';
import axios from 'axios';
import loginImage from '../assets/images/login.png';
import { useAuth } from "../AuthContext";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            if (!/\S+@\S+\.\S+/.test(email)) {
                setErrorMessage('Please enter a valid email address.');
                return;
            }

            const response = await axios.post('http://localhost:8080/login', {
                email,
                password,
            }, {
                withCredentials: true,
            });

            if (response.status === 200) {
                login(); // Kullanıcıyı oturum açmış olarak işaretle
                navigate('/'); // SPA yönlendirmesi
            }
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setErrorMessage('Invalid email or password!');
            } else {
                setErrorMessage('Something went wrong. Please try again.');
            }
        }
    };

    return (
        <div className="flex items-baseline py-24 justify-center min-h-screen">
            <div className="w-full sm:max-w-sm bg-white shadow-md rounded-lg p-6">
                <div className="text-center">
                    <img
                        className="mx-auto h-32 w-auto"
                        src={loginImage}
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900">
                        Sign In To Your Account
                    </h2>
                </div>

                {errorMessage && (
                    <div className="mt-4 text-red-600 text-center">
                        {errorMessage}
                    </div>
                )}

                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setErrorMessage('');
                                }}
                                required
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setErrorMessage('');
                                }}
                                required
                                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;

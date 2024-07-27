import React from 'react';
import './login.css';
import { default as logo } from './assets/icons8-google.svg';
import { default as log } from './assets/Digital.svg'; // Ensure you have the logo for Datazen

const Login = () => {
    return (
        <div className="login-container flex items-center justify-center h-screen">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-2/3 md:w-18/19 lg:w-18/19 flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-8">
                        <img src={log} alt="Datazen Logo" className="w-10 h-10 mr-2" />
                        <span className="text-2xl font-bold">Datazen</span>
                    </div>
                    <h1 className="text-2xl font-bold text-center">Welcome back</h1>
                    <p className="text-center text-gray-600 mb-4">Welcome back! Please enter your details</p>
                    <form>
                        <div className="input-group mb-4">
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="w-full px-4 py-2 mt-2 border-black border rounded-lg bg-white text-black focus:outline-none focus:ring-1 focus:ring-blue-500" 
                                required 
                            />
                        </div>
                        <div className="input-group mb-4">
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                className="w-full px-4 py-2 mt-2 border-black border rounded-lg bg-white text-black focus:outline-none focus:ring-1 focus:ring-blue-500" 
                                required 
                            />
                        </div>
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" name="remember" className="mr-2" />
                                <label htmlFor="remember" className="text-gray-700">Remember for 30 days</label>
                            </div>
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password</a>
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">Sign in</button>
                        <button type="button" className="w-full bg-white text-black border border-gray-300 py-2 rounded-lg flex items-center justify-center mt-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
                            <img src={logo} className="w-5 h-5 mr-2" />
                            Sign in with Google
                        </button>
                    </form>
                    <p className="text-center text-gray-700 mt-4">Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up for free</a></p>
                </div>
                <div className="login-image hidden md:block custom-image-width"> {}
                    <img src="/src/assets/first.png" alt="Decorative" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Login;

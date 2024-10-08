// Import the React library to use JSX syntax and React components
import React from 'react';

// Import the CSS file for styling the login component
import './login.css';

// Import the Google logo and Digital logo as named imports
import { default as logo } from './assets/icons8-google.svg';
import { default as log } from './assets/Digital.svg'; // Ensure you have the logo for Datazen

// Define the Login functional component
const Login = () => {
    return (
        // Main container for the login component, using utility classes for styling
        <div className="login-container flex items-center justify-center h-screen">
            {/* Inner container with styling and layout classes */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full h-2/3 md:w-18/19 lg:w-18/19 flex flex-col md:flex-row">
                {/* Left section containing the form, with padding and flex layout */}
                <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
                    {/* Header section with logo and title */}
                    <div className="flex items-center mb-8">
                        {/* Logo image with styling */}
                        <img src={log} alt="Datazen Logo" className="w-10 h-10 mr-2" />
                        {/* Title text */}
                        <span className="text-2xl font-bold">Datazen</span>
                    </div>
                    {/* Welcome message */}
                    <h1 className="text-2xl font-bold text-center">Welcome back</h1>
                    <p className="text-center text-gray-600 mb-4">Welcome back! Please enter your details</p>
                    
                    {/* Form element containing input fields and buttons */}
                    <form>
                        {/* Email input group */}
                        <div className="input-group mb-4">
                            {/* Email label */}
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            {/* Email input field */}
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                className="w-full px-4 py-2 mt-2 border-black border rounded-lg bg-white text-black focus:outline-none focus:ring-1 focus:ring-blue-500" 
                                required 
                            />
                        </div>
                        {/* Password input group */}
                        <div className="input-group mb-4">
                            {/* Password label */}
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            {/* Password input field */}
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                className="w-full px-4 py-2 mt-2 border-black border rounded-lg bg-white text-black focus:outline-none focus:ring-1 focus:ring-blue-500" 
                                required 
                            />
                        </div>
                        {/* Remember me and forgot password section */}
                        <div className="flex justify-between items-center mb-4">
                            {/* Remember me checkbox */}
                            <div className="flex items-center">
                                <input type="checkbox" id="remember" name="remember" className="mr-2" />
                                <label htmlFor="remember" className="text-gray-700">Remember for 30 days</label>
                            </div>
                            {/* Forgot password link */}
                            <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password</a>
                        </div>
                        {/* Sign in button */}
                        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">Sign in</button>
                        {/* Sign in with Google button */}
                        <button type="button" className="w-full bg-white text-black border border-gray-300 py-2 rounded-lg flex items-center justify-center mt-4 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50">
                            {/* Google logo */}
                            <img src={logo} className="w-5 h-5 mr-2" />
                            Sign in with Google
                        </button>
                    </form>
                    {/* Sign up link */}
                    <p className="text-center text-gray-700 mt-4">Don’t have an account? <a href="#" className="text-blue-600 hover:underline">Sign up for free</a></p>
                </div>
                {/* Right section for decorative image, hidden on small screens */}
                <div className="login-image hidden md:block custom-image-width">
                    <img src="/src/assets/first.png" alt="Decorative" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

// Export the Login component as the default export
export default Login;

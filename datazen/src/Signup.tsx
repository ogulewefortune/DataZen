// Import the React library to use JSX syntax and React components
import React from 'react';

// Import the CSS file for styling the signup component
import './signup.css';

// Import the Digital logo as a named import
import { default as log } from './assets/Digital.svg'; // Ensure you have the logo for Datazen

// Define the Signup functional component
const Signup = () => {
    return (
        // Main container for the signup component, using utility classes for styling
        <div className="signup-container flex items-center justify-center h-screen">
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
                    <h1 className="text-2xl font-bold text-center">Join Us</h1>
                    <p className="text-center text-gray-600 mb-4">Register! Please enter your details</p>
                    
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
                        {/* Sign up button */}
                        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">Sign up</button>
                    </form>
                    {/* Sign in link */}
                    <p className="text-center text-gray-700 mt-4">Already have an account? <a href="/login" className="text-blue-600 hover:underline">Sign in</a></p>
                </div>
                {/* Right section for decorative image, hidden on small screens */}
                <div className="signup-image hidden md:block custom-image-width">
                    <img src="/src/assets/first.png" alt="Decorative" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
};

// Export the Signup component as the default export
export default Signup;

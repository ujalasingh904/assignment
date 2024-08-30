import React, { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa'; // Optional: For moon and sun icons

const DarkModeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.classList.toggle('dark', !isDarkMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className={`p-2 md:p-3 rounded-full shadow-lg transition-colors duration-300 ${
                isDarkMode ? 'bg-gray-800 text-yellow-300' : 'bg-gray-200 text-gray-800'
            }`}
        >
            {isDarkMode ? (
                <FaSun className="text-md sm:text-xl" />
            ) : (
                <FaMoon className="text-md sm:text-xl" />
            )}
        </button>
    );
};

export default DarkModeToggle;

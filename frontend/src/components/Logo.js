import React from 'react';

const Logo = () => {
    return (
        <div className="flex items-center">
            {/* Logo Icon */}
            <div className="bg-teal-400 text-white rounded-full p-3">
                <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h18M4 8h16M4 8a2 2 0 110-4h16a2 2 0 110 4M4 16h16m-2 2a2 2 0 100 4 2 2 0 100-4m-12 2a2 2 0 100 4 2 2 0 100-4M4 12h16"
                    ></path>
                </svg>
            </div>
            {/* Logo Text */}
            <span className="ml-3 text-2xl font-bold text-gray-800">
                ShopMate
            </span>
        </div>
    );
};

export default Logo;

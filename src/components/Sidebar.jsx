import React, { useState } from 'react';
import { BiMenuAltLeft, BiX } from "react-icons/bi";

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const toggleIcon = isSidebarOpen ? (
        <BiX />
    ) : (
        <BiMenuAltLeft />
    );

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className={`md:hidden p-2 rounded-full shadow-lg fixed ${
                    isSidebarOpen ? 'bg-red-400 top-3 left-1 z-50' : 'bg-gray-300 top-4 left-1 z-50'
                }`}
            >
                {toggleIcon}
            </button>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 w-64 bg-gray-100 shadow-md h-full min-h-screen p-4 transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } transition-transform duration-300 ease-in-out z-40 md:relative md:translate-x-0`}
            >
                <h2 className="text-xl font-bold mb-4 ml-6">Sidebar</h2>
                <ul className="space-y-2">
                    <li><a href="#link1" className="block text-gray-700 hover:text-green-500">Link 1</a></li>
                    <li><a href="#link2" className="block text-gray-700 hover:text-green-500">Link 2</a></li>
                    <li><a href="#link3" className="block text-gray-700 hover:text-green-500">Link 3</a></li>
                </ul>
            </aside>

            {/* Overlay */}
            {isSidebarOpen && (
                <div
                    onClick={toggleSidebar}
                    className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
                ></div>
            )}
        </>
    );
};

export default Sidebar;

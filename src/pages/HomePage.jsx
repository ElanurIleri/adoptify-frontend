import React from 'react';

const HomePage = () => {
    return (
        <main className="flex-1 p-6 bg-gray-50 max-w-6xl mx-auto md:ml-16"> {/* Genişlik sınırı ve sola kaydırma */}
            <h1 className="text-3xl font-bold mb-4">Welcome to My Website</h1>
            <p className="text-gray-700">
                This is the main content area. Add your homepage content here.
            </p>
        </main>
    );
};

export default HomePage;

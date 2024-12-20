import React, { useState } from 'react';

const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        '/Adoptify_logo.png',
        '/Meet.png',
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <main className="flex-1 bg-gray-50 max-w-6xl mx-auto p-6">
            {/* Hero Section with TailwindCSS Carousel */}
            <section className="bg-gradient-to-r from-blue-500 to-green-400 text-white py-10 px-6 rounded-lg shadow-md mb-8 text-center relative">
                <div className="relative">
                    {/* Carousel Image */}
                    <img
                        src={images[currentIndex]}
                        alt="Carousel"
                        className="w-full h-60 object-contain rounded-lg transition-all duration-500 transform hover:scale-105"  
                    />

                    {/* Prev Button */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-800 p-3 rounded-full transition-all"
                    >
                        &#10094;
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-blue-600 hover:bg-blue-800 p-3 rounded-full transition-all"
                    >
                        &#10095;
                    </button>
                     {/* Slide Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-white'} transition-all`}
                        />
                    ))}
                </div>
                </div>
                {/* Hero Text */}
                <h1 className="text-4xl font-bold mb-4">Welcome to Adoptify</h1>
                <p className="text-lg mb-6">Your journey to finding a loving pet begins here. Let’s make a difference together!</p>
                <button className="bg-white text-blue-500 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100">Adopt Now</button>
            </section>

            {/* About Section */}
            <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">About Us</h2>
                <p className="text-gray-700 leading-relaxed">
                    Adoptify is dedicated to connecting pets in need with loving families. Our mission is to create a world where every animal has a safe and happy home.
                </p>
            </section>

            {/* Statistics Section */}
            <section className="bg-blue-100 p-6 rounded-lg mb-12 text-center">
                <h2 className="text-2xl font-bold text-blue-800 mb-4">Our Impact</h2>
                <div className="flex justify-around">
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">1,000+</h3>
                        <p className="text-gray-700">Pets Adopted</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">500+</h3>
                        <p className="text-gray-700">Volunteers</p>
                    </div>
                    <div>
                        <h3 className="text-3xl font-bold text-blue-600">300+</h3>
                        <p className="text-gray-700">Happy Families</p>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Get Involved</h2>
                <p className="text-gray-700 mb-6">Join us in making a difference in the lives of pets and people alike.</p>
                <div className="space-x-4">
                    <button className="bg-green-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-600">Become a Volunteer</button>
                    <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600">Donate Now</button>
                </div>
            </section>
        </main>
    );
};

export default HomePage;

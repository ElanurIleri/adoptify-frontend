import React, { useState } from "react";
import PetCard from "./PetCard";

const SearchPet = () => {
  const pets = [
    { id: 1, name: "Max", type: "Dog", age: "2 years", photo: "/dog1.jpg" },
    { id: 2, name: "Bella", type: "Cat", age: "1 year", photo: "/cat1.webp" },
    { id: 3, name: "Charlie", type: "Dog", age: "3 years", photo: "/dog2.webp" },
    { id: 4, name: "Lucy", type: "Cat", age: "4 years", photo: "/cat2.webp" },
    { id: 5, name: "Milo", type: "Hamster", age: "6 months", photo: "/hamster.jpg" },
    { id: 6, name: "Luna", type: "Cat", age: "2 years", photo: "/cat3.jpg" },
    { id: 7, name: "Daisy", type: "Dog", age: "2 years", photo: "/dog3.jpg" },
    { id: 8, name: "Nemo", type: "Fish", age: "4 years", photo: "/fish1.jpg" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPets = pets.filter((pet) =>
    pet.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="max-w-4xl w-full ml-1">
        <h1 className="text-2xl font-bold mb-4">Find Your Perfect Pet!</h1>
        <form className="flex mb-4">
          <input
            type="text"
            placeholder="Search for pets..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-2 rounded-l w-full"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-r"
            onClick={(e) => e.preventDefault()}
          >
            Search
          </button>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPets.map((pet) => (
            <PetCard
              key={pet.id}
              name={pet.name}
              type={pet.type}
              age={pet.age}
              photo={pet.photo} // Fotoğrafı buraya ekledik
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPet;

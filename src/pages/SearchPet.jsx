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
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [ageFilter, setAgeFilter] = useState("");

  // Tür checkbox değişimlerini yönetir
  const handleTypeFilterChange = (type) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  // Filtreleme işlemi
  const filteredPets = pets.filter((pet) => {
    // İsimle eşleşme
    const matchesName = pet.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Türle eşleşme
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(pet.type);

    // Yaşla eşleşme (basit string araması; "2 years", "6 months" vb.)
    const matchesAge =
      ageFilter === "" || pet.age.toLowerCase().includes(ageFilter.toLowerCase());

    return matchesName && matchesType && matchesAge;
  });

  return (
    <div className="flex items-start justify-center min-h-screen p-4">
      {/* Sidebar */}
      <div className="w-1/4 p-6 bg-gray-50 border-r border-gray-200 shadow-md mr-4 rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Filter</h2>

        {/* İsim ile arama */}
        <div className="mb-6">
          <label htmlFor="petNameSearch" className="block text-lg font-medium text-gray-700 mb-2">
            Search with name
          </label>
          <input
            id="petNameSearch"
            type="text"
            placeholder="enter the name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Yaş ile arama */}
        <div className="mb-6">
          <label htmlFor="petAgeSearch" className="block text-lg font-medium text-gray-700 mb-2">
            Search with age
          </label>
          <input
            id="petAgeSearch"
            type="text"
            placeholder="enter the age"
            value={ageFilter}
            onChange={(e) => setAgeFilter(e.target.value)}
            className="border border-gray-300 p-3 w-full rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Tür filtreleri */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Kind</h3>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 focus:ring-2"
              checked={selectedTypes.includes('Dog')}
              onChange={() => handleTypeFilterChange('Dog')}
            />
            <span className="text-gray-700">Dog</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 focus:ring-2"
              checked={selectedTypes.includes('Cat')}
              onChange={() => handleTypeFilterChange('Cat')}
            />
            <span className="text-gray-700">Cat</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 focus:ring-2"
              checked={selectedTypes.includes('Hamster')}
              onChange={() => handleTypeFilterChange('Hamster')}
            />
            <span className="text-gray-700">Hamster</span>
          </label>
          <label className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="mr-3 h-5 w-5 text-blue-500 focus:ring-blue-500 focus:ring-2"
              checked={selectedTypes.includes('Fish')}
              onChange={() => handleTypeFilterChange('Fish')}
            />
            <span className="text-gray-700">Fish</span>
          </label>
        </div>
      </div>

      {/* Ana içerik */}
      <div className="max-w-4xl w-full">
        <h1 className="text-2xl font-bold mb-4">Find Your Perfect Pet!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPets.map((pet) => (
            <PetCard
              key={pet.id}
              name={pet.name}
              type={pet.type}
              age={pet.age}
              photo={pet.photo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPet;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        passwordConfirm: "",
        phone: "",
        criminalRecord: "Yes",
        gender: "other",
        area: "",
        city: "",
        district: ""
    });

    const [cities, setCities] = useState([]); // City verileri
    const [districts, setDistricts] = useState([]); // District verileri
    const navigate = useNavigate(); // useNavigate


    // Şehirleri çekme
    useEffect(() => {
        axios.get("http://localhost:8080/cities")
            .then(response => setCities(response.data))
            .catch(error => console.error("Error fetching cities:", error));
    }, []);

    // Şehir seçildiğinde ilçeleri çekme
    const handleCityChange = (e) => {
        const cityId = e.target.value;
        setFormData({ ...formData, city: cityId, district: "" }); // Şehir ID'sini kaydet ve district'i sıfırla

        axios.get(`http://localhost:8080/districts?cityId=${cityId}`)
            .then(response => setDistricts(response.data))
            .catch(error => console.error("Error fetching districts:", error));
    };

    // İlçe seçimi ve diğer input değişiklikleri
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Boş alan kontrolü
        if (
            !formData.userName ||
            !formData.email ||
            !formData.password ||
            !formData.phone ||
            !formData.criminalRecord ||
            !formData.gender ||
            !formData.area ||
            !formData.city ||
            !formData.district
        ) {
            alert("Please fill in all fields before submitting the form.");
            return;
        }

        const payload = {
            userName: formData.userName,
            email: formData.email,
            password: formData.password,
            phoneNumber: formData.phone,
            criminalRecord: formData.criminalRecord === "Yes",
            genderId: formData.gender,
            address: {
                area: formData.area,
                cityId: formData.city,
                districtId: formData.district
            }
        };

        try {
            const response = await axios.post("http://localhost:8080/register", payload, {
                headers: { "Content-Type": "application/json" }
            });
            console.log("User registered successfully:", response.data);
            alert("Registration Successful!");

             // Login sayfasına yönlendirme
             setTimeout(() => {
                navigate("/login");
            }, 1000);
        } catch (error) {
            console.error("Error registering user:", error.response?.data || error.message);
            alert("Failed to register. Please try again.");
        }
    };

    return (
        <div className="flex items-center justify-center p-10 pb-32 min-h-screen bg-gray-50">
            <div className="mx-auto w-full max-w-[550px] bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-center text-2xl font-bold mb-6 text-[#07074D]">Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div className="mb-5">
                        <label className="block text-base font-medium">Full Name</label>
                        <input type="text" name="userName" placeholder="Full Name" onChange={handleChange}
                            className="w-full rounded-md border py-3 px-6" />
                    </div>

                    {/* Email */}
                    <div className="mb-5">
                        <label className="block text-base font-medium">Email Address</label>
                        <input type="email" name="email" placeholder="Email" onChange={handleChange}
                            className="w-full rounded-md border py-3 px-6" />
                    </div>

                    {/* Password */}
                    <div className="mb-5">
                        <label className="block text-base font-medium">Password</label>
                        <input type="password" name="password" placeholder="Password" onChange={handleChange}
                            className="w-full rounded-md border py-3 px-6" />
                    </div>

                    {/* Phone */}
                    <div className="mb-5">
                        <label className="block text-base font-medium">Phone Number</label>
                        <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange}
                            className="w-full rounded-md border py-3 px-6" />
                    </div>

                    {/* Gender */}
                    <div className="mb-5">
                    <label className="block text-base font-medium">Gender</label>
                    <select
                        name="gender"
                        onChange={handleChange}
                        className="w-full rounded-md border py-3 px-6"
                    >
                        <option value="">Select Gender</option>
                        <option value="1">Male</option>    {/* Male için id 1 */}
                        <option value="2">Female</option>  {/* Female için id 2 */}
                        <option value="3">Other</option>   {/* Other için id 3 */}
                    </select>
                    </div>

                    {/* Criminal Record */}
                         {/* Criminal Record */}
                         <div className="mb-5">
                        <label className="block text-base font-medium">Criminal Record</label>
                        <div className="flex space-x-4">
                            <label className="flex items-center space-x-2">
                                <input 
                                    type="radio" 
                                    name="criminalRecord" 
                                    value="Yes" 
                                    checked={formData.criminalRecord === "Yes"} 
                                    onChange={handleChange}
                                />
                                <span>Yes</span>
                            </label>
                            <label className="flex items-center space-x-2">
                                <input 
                                    type="radio" 
                                    name="criminalRecord" 
                                    value="No" 
                                    checked={formData.criminalRecord === "No"} 
                                    onChange={handleChange}
                                />
                                <span>No</span>
                            </label>
                        </div>
                    </div>

                      {/* City */}
                      <div className="mb-5">
                        <label className="block text-base font-medium">City</label>
                        <select name="city" onChange={handleCityChange} value={formData.city}
                                className="w-full rounded-md border py-3 px-6">
                            <option value="">Select City</option>
                            {cities.map(city => (
                                <option key={city.id} value={city.id}>
                                    {city.cityName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* District */}
                    <div className="mb-5">
                        <label className="block text-base font-medium">District</label>
                        <select name="district" onChange={handleChange} value={formData.district}
                                className="w-full rounded-md border py-3 px-6" disabled={!formData.city}>
                            <option value="">Select District</option>
                            {districts.map(district => (
                                <option key={district.id} value={district.id}>
                                    {district.districtName}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Area */}
                    <div className="mb-5">
                        <label className="block text-base font-medium">Area</label>
                        <input type="text" name="area" placeholder="Area" onChange={handleChange}
                            className="w-full rounded-md border py-3 px-6" />
                    </div>

                    {/* Submit */}
                    <button type="submit"
                        className="w-full bg-blue-500 text-white rounded-md py-3 px-6 hover:bg-blue-700">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;

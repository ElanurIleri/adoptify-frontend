import React from 'react';

const Signup = () => {
    return (
      <div className="flex items-center justify-center p-10  pb-32  min-h-screen">
          <div className="mx-auto w-full max-w-[550px] bg-white">
              <form>
                  <div className="mb-5">
                      <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                          Full Name
                      </label>
                      <input type="text" name="name" id="name" placeholder="Full Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>
                  <div className="mb-5">
                      <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                          Email Address
                      </label>
                      <input type="email" name="email" id="email" placeholder="Enter your email"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>
                  <div className="mb-5">
                      <label htmlFor="password" className="mb-3 block text-base font-medium text-[#07074D]">
                          Password
                      </label>
                      <input type="password" name="password" id="password" placeholder="Password"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>
                  <div className="mb-5">
                      <label htmlFor="password-confirm" className="mb-3 block text-base font-medium text-[#07074D]">
                          Password Confirm
                      </label>
                      <input 
                          type="password" 
                          name="password-confirm" 
                          id="password-confirm" 
                          placeholder="Confirm Password"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>
                  <div className="mb-5">
                      <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                          Phone Number
                      </label>
                      <input type="text" name="phone" id="phone" placeholder="Enter your phone number"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                  </div>
                  <div className="-mx-3 flex flex-wrap">
                      <div className="w-full px-3 sm:w-1/2">
                          <div className="mb-5">
                          <label className="mb-3 block text-base font-medium text-[#07074D]">
                              Criminal Record
                          </label>
                          <div className="flex space-x-4">
                              <label className="flex items-center space-x-2">
                                  <input 
                                      type="radio" 
                                      name="criminalRecord" 
                                      value="Yes" 
                                      className="h-5 w-5 border-gray-300 text-[#6A64F1] focus:ring-[#6A64F1]"
                                  />
                                  <span className="text-base font-medium text-[#6B7280]">Yes</span>
                              </label>
                              <label className="flex items-center space-x-2">
                                  <input 
                                      type="radio" 
                                      name="criminalRecord" 
                                      value="No" 
                                      className="h-5 w-5 border-gray-300 text-[#6A64F1] focus:ring-[#6A64F1]"
                                  />
                                  <span className="text-base font-medium text-[#6B7280]">No</span>
                              </label>
                          </div>
                          </div>
                        </div>
                      <div className="w-full px-3 sm:w-1/2">
                        <div className="mb-5">
                          <label htmlFor="gender" className="mb-3 block text-base font-medium text-gray-900">
                              Cinsiyet
                          </label>
                          <select 
                              id="gender" 
                              name="gender" 
                              className="w-full rounded-md border border-gray-300 bg-white py-3.5 px-6 text-base text-gray-900 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500">
                              <option value="other">Diğer</option>
                              <option value="male">Erkek</option>
                              <option value="female">Kadın</option>
                          </select>
                        </div>
                      </div>
                  </div>

                  <div className="mb-5 pt-3">
                      <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                          Address Details
                      </label>
                      <div className="-mx-3 flex flex-wrap">
                          <div className="w-full px-3">
                              <div className="mb-5">
                                  <input type="text" name="area" id="area" placeholder="Enter area"
                                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                              </div>
                          </div>
                          <div className="w-full px-3 sm:w-1/2">
                              <div className="mb-5">
                                  <input type="text" name="city" id="city" placeholder="Enter city"
                                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                              </div>
                          </div>
                          <div className="w-full px-3 sm:w-1/2">
                              <div className="mb-5">
                                  <input type="text" name="state" id="state" placeholder="Enter state"
                                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" />
                              </div>
                          </div>
                      </div>
                  </div>

                  <div>
                      <button
                          className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                          Book Appointment
                      </button>
                  </div>
              </form>
          </div>
      </div>
    );
};

export default Signup;

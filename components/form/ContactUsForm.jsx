"use client"
import React, { useState } from 'react'



const ContactUsForm = () => {
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };
  return (
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col-2 gap-20 '>
          <div className='w-full'>
            <label htmlFor=""> Name</label>
            <input
              className="w-full border-gray-300 focus:border-orange-600 rounded-lg p-3 mt-5 shadow-md"
              placeholder="Your Name"
              type='text'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='w-full'>
            <label htmlFor=""> Email</label>
            <input
              className="w-full focus:border-orange-600 rounded-lg p-3 mt-5 shadow-lg"
              placeholder="Your Email"
              type='email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <textarea
            className="w-full focus:border-orange-600 rounded-lg p-3 mt-14 shadow-md"
            rows="6"
            placeholder="Write Message..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <button
            type="submit"
            className="mt-6 px-10 py-3 text-white bg-orange-600 hover:bg-black font-bold rounded-2xl hover:text-orange-600">
            Send Message
          </button>
        </div>
      </form>
  )
}

export default ContactUsForm
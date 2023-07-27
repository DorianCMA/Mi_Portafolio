import React from 'react'

const ContacForm = () => {
  return (
    
    <div className="flex items-center min-h-screen bg-black">
    <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default ContacForm

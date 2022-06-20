const Form = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center"> Pets Tracking</h2>
      <p className="text-lg mt-5 text-center mb-10">Add a pet and 
        <span className="text-indigo-600 font-bold"> admin it</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        <div className="mb-5">
          <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">
            Pet's name
          </label>
          <input id="petName" type="text" placeholder="Pet's name" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="alfaName" className="block text-gray-700 uppercase font-bold">
            Alfa's name
          </label>
          <input id="alfaName" type="text" placeholder="Alfa's name" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Alfa's email
          </label>
          <input id="email" type="text" placeholder="Alfa's email" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="dateStart" className="block text-gray-700 uppercase font-bold">
            Date
          </label>
          <input id="dateStart" type="date" placeholder="Date start" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"/>
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Date
          </label>
          <textarea id="symptoms" className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" placeholder="Describe pet symtpoms"/>
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Add Pet"/>
      </form>
    </div>
  )
}

export default Form
import { useState, useEffect } from 'react'

const Form = ( {pets, setPets} ) => {
  const [ name, setName ] = useState('');
  const [ alfa, setAlfa ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ date, setDate ] = useState('');
  const [ symptoms, setSymptoms ] = useState('');
  const [ error, setError ] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if([ name, alfa, email, date, symptoms ].includes("")) {
      setError(true)
      return;
    } 
      setError(false)

      const petObject = {
        name,
        alfa,
        email,
        date,
        symptoms
      }

      setPets([...pets, petObject])

      setName("")
      setAlfa("")
      setEmail("")
      setDate("")
      setSymptoms("")
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 my-10">
      <h2 className="font-black text-3xl text-center"> Pets Tracking</h2>
      <p className="text-lg mt-5 text-center mb-10">Add a pet and 
        <span className="text-indigo-600 font-bold"> admin it</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
        {error && (
          <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
            <p>Please fill the form</p>
          </div>
        )}
        <div className="mb-5">
          <label htmlFor="petName" className="block text-gray-700 uppercase font-bold">
            Pet's name
          </label>
          <input 
            id="petName" 
            type="text" 
            placeholder="Pet's name" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" 
            value={name} 
            onChange={ (e) => setName(e.target.value) }/>
        </div>
        <div className="mb-5">
          <label htmlFor="alfaName" className="block text-gray-700 uppercase font-bold">
            Alfa's name
          </label>
          <input 
            id="alfaName" 
            type="text" 
            placeholder="Alfa's name" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={alfa} 
            onChange={ (e) => setAlfa(e.target.value) }/>
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
            Alfa's email
          </label>
          <input 
            id="email" 
            type="text" 
            placeholder="Alfa's email" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email} 
            onChange={ (e) => setEmail(e.target.value) }/>
        </div>
        <div className="mb-5">
          <label htmlFor="dateStart" className="block text-gray-700 uppercase font-bold">
            Date
          </label>
          <input 
            id="dateStart" 
            type="date" 
            placeholder="Date start" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={date} 
            onChange={ (e) => setDate(e.target.value) }/>
        </div>
        <div className="mb-5">
          <label htmlFor="symptoms" className="block text-gray-700 uppercase font-bold">
            Date
          </label>
          <textarea 
            id="symptoms" 
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md" p
            laceholder="Describe pet symtpoms"
            value={symptoms} 
            onChange={ (e) => setSymptoms(e.target.value) }/>
        </div>
        <input type="submit" className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all" value="Add Pet"/>
      </form>
    </div>
  )
}

export default Form
import Pets from './Pets'

const PetsList = ( {pets} ) => {
  return (
    <div className="md:1/2 md:h-screen lg:w-3/5 h-screen overflow-y-scroll">
      <h2 className="font-black text-3xl text-center"> Pets List</h2>
      <p className="text-lg mt-5 text-center mb-10">Admin your 
        <span className="text-indigo-600 font-bold"> pets and appointments</span>
      </p>

      { pets.map( (pet, index )=> (
          <Pets
            key={pet.id}
            pet={pet}
          />
      ))}

    </div>
  )
}

export default PetsList   
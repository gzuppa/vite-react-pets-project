import { useState } from "react"
import Header from './components/Header'
import Form from './components/Form'
import PetsList from './components/PetsList'

function App() {

  const [ pets, setPets ] = useState([])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form 
          pets={pets}
          setPets={setPets}
        />
        <PetsList />
      </div>
    </div>
  )
}

export default App

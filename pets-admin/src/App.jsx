import Header from './components/Header'
import Form from './components/Form'
import PetsList from './components/PetsList'

function App() {
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Form />
        <PetsList />
      </div>
    </div>
  )
}

export default App

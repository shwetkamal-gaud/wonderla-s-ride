import './App.css'
import Navbar from './components/Navbar'
import RidesSection from './components/RidesSection'

function App() {


  return (
    <div className="bg-gray-900 bg-blue-dark">
      <div className='flex items-center w-full px-2'>
        <Navbar />
      </div>
      <div>

      </div>
      <RidesSection />
    </div>
  )
}

export default App

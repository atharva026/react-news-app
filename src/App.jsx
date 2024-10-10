import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Header for the navigation bar */}
        <header className='sticky top-0 '>
          <Navbar />
        </header>

        {/* Main content area where Outlet renders the routes */}
        <main className="flex-grow">
          <Outlet />
        </main>
        
        <Footer linkedinLink={'https://www.linkedin.com/in/atharva-mane/'} githubLink={"https://github.com/atharva026"} />
      </div>
    </>
  )
}

export default App
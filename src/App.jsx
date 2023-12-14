import Navbar from "./components/Navbar"
import Footer from "./components/Footer/Footer"
import Banner from './components/Banner'
import Details from './components/Details/Details'
import Box from './components/Box'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <main>
        <Details/>
        <Box/>
      </main>
      <Footer/>
    </>
  )
}

export default App

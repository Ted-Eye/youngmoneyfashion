
import './App.css'
import Hairstyles from './components/ui/hairstyles/Hairstyles'
import NavBar from './components/ui/navbar/NavBar'
import AboutUs from './pages/about/AboutUs'
import Favourites from './pages/favourites/Favourites'
import History from './pages/history/History'
import Landing from './pages/Landing/Landing'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProductList from './pages/products/ProductList'
import addBooking from './pages/bookings/addBooking'
import { CatalogProvider } from './contexts/CatalogContext'

function App() {

  return (
    <>
      {/* <NavBar/> */}
      <Router>
        <CatalogProvider>
        <NavBar/>
        <Routes>
          <Route path='/' Component ={Landing}/>
          <Route path='/gallery' Component ={Hairstyles}/>
          <Route path='/products' Component ={ProductList}/>
          <Route path='/favourites' Component ={Favourites}/>
          <Route path='/history' Component ={History}/>
          <Route path='/about' Component ={AboutUs}/>
          <Route path='/booking' Component ={addBooking}/>
          <Route path='/{*}' Component ={''}/>
        </Routes>
        </CatalogProvider>
      </Router>
    </>
  )
}

export default App

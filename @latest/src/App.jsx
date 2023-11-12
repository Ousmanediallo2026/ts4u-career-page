
import {Route, Routes} from 'react-router-dom'

import './App.css'
import Developer from './component/Developer'
import ProductOwner from './Product-Owner/ProductOwner'
function App() {
  

  return (
    <Routes>
    <Route path='/' element={<Developer></Developer>}></Route>
    <Route path='/user/:id' element={<ProductOwner />} /> 
    
    </Routes>
  )
}

export default App

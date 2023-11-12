
import {Route, Routes} from 'react-router-dom'

import './App.css'
import Developer from './component/Developer'

function App() {
  

  return (
    <Routes>
    <Route path='/' element={<Developer></Developer>}></Route>
    
    </Routes>
  )
}

export default App

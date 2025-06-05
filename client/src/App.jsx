import './style/App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Blog from './blog'
import Createblog from './createblog'
import Testing from './Testing'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/test' element={<Testing />} />
          <Route path='/' element={<Blog />} />
          <Route path='/createblog' element={<Createblog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

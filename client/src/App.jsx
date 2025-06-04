import './style/App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Blog from './blog'
import Createblog from './createblog'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Blog />} />
          <Route path='/createblog' element={<Createblog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

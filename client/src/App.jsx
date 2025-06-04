import './style/App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'

import Blog from './blog'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

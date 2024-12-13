import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import HomeBody from './routes/Home/HomeBody'
import SearchPage from './routes/Home/SearchPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="search" element={<SearchPage />} >
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
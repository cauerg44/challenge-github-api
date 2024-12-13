import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './routes/Home'
import HomeBody from './routes/Home/HomeBody'
import SearchPage from './routes/Home/SearchPage'
import GithubResultCard from './routes/Home/SubRoutes/GithubResultCard'
import NotFound from './routes/Home/SubRoutes/NotFound'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" />} />
          <Route path="home" element={<HomeBody />} />
          <Route path="search" element={<SearchPage />} >
          <Route path=":user" element={<GithubResultCard />} />
          <Route path="user/not-found" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
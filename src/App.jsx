
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import SignUp from './pages/SignUp/SignUp'
import SignIn from './pages/SignIn/SignIn'
import Layout from './pages/layout/Layout'


function App() {

  return (
    <>
      <BrowserRouter basename='/clerksy/'>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="SignIn" element={<SignIn />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

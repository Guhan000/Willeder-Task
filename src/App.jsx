import './App.css'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext'

function App() {

  return (
    <BrowserRouter>
      <UserAuthContextProvider>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/home"
            element={<ProtectedRoute>
              <Home />
            </ProtectedRoute>}>
          </Route>
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  )
}

export default App

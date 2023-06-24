import './App.css'
import Login from './components/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { UserAuthContextProvider } from './context/UserAuthContext'
import ForgetPassword from './components/ForgetPassword';
import ResetPassword from './components/ResetPassword';
import LazyLoading from './components/LazyLoading';

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
          <Route path='/forget-password' element={<ForgetPassword />}></Route>
          <Route path='reset-password' element={<ResetPassword />}></Route>
          <Route path='/home/data' element={<LazyLoading />}></Route>
        </Routes>
      </UserAuthContextProvider>
    </BrowserRouter>
  )
}

export default App

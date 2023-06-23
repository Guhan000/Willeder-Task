import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'

const Home = () => {

  const { user, logOut } = useUserAuth();

  const handleLogout = async () => {
    try{
      await logOut();
    }catch(err){
      console.log(err.message);
    }
  }

  return (
    <div>
      <p>Welcome <i className='email'>{user.email}</i></p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Home
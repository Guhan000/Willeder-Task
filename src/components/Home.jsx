import React from 'react'
import { useUserAuth } from '../context/UserAuthContext'
import { Link } from 'react-router-dom';

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
      <Link to="/home/data"><button>LazyLoad</button></Link>
    </div>
  )
}

export default Home
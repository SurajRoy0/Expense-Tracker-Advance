import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Components/Pages/SignUp';
import Navbar from './Components/UI/Navbar';
import Home from './Components/Pages/Home';
import SignIn from './Components/Pages/SignIn';
import UserProfile from './Components/Pages/UserProfile';
import { useContext } from 'react';
import AuthContext from './Store/AuthContext';

function App() {
  const authCtx = useContext(AuthContext)
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        {authCtx.isLoggedIn && <Route path='/user-profile' element={<UserProfile />} />}
      </Routes>
    </>
  );
}

export default App;

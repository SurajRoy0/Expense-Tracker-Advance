import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Components/Pages/SignUp';
import Navbar from './Components/UI/Navbar';
import Home from './Components/Pages/Home';
import SignIn from './Components/Pages/SignIn';
import UserProfile from './Components/Pages/UserProfile';
import { useContext, useState } from 'react';
import AuthContext from './Store/AuthContext';
import Verify from './Components/UI/Verify';

function App() {
  const authCtx = useContext(AuthContext)
  const [VerifyModal, setVerifyModal] = useState(false)

  const verifyModalOpenHandler = () => {
    setVerifyModal(true);
  }

  const verifyModalCloseHandler = () => {
    setVerifyModal(false);
  }
  return (
    <>
      {VerifyModal && <Verify verifyModalCloseHandler={verifyModalCloseHandler} />}
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        {authCtx.isLoggedIn && <Route path='/user-profile' element={<UserProfile verifyModalOpenHandler={verifyModalOpenHandler} />} />}
      </Routes>
    </>
  );
}

export default App;

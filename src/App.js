import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Components/Pages/SignUp';
import Navbar from './Components/UI/Navbar';
import Home from './Components/Pages/Home';
import SignIn from './Components/Pages/SignIn';
import UserProfile from './Components/Pages/UserProfile';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/user-profile' element={<UserProfile />} />
      </Routes>
    </>
  );
}

export default App;

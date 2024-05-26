import React, { useEffect } from 'react';
import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ResultPage from './pages/ResultPage';
import ScheduleAdd_1 from './pages/SchedulePage/ScheduleAdd_1';
import ScheduleAdd_2 from './pages/SchedulePage/ScheduleAdd_2';
import ScheduleAdd_3 from './pages/SchedulePage/ScheduleAdd_3';
import ScheduleAdd_4 from './pages/SchedulePage/ScheduleAdd_4';
import ScheduleAdd_5 from './pages/SchedulePage/ScheduleAdd_5';
import AddpetPage from './pages/AddpetPage';
import PetDetailPage from './pages/PetDetailPage';
import ProfileChangePage from './pages/ProfileChangePage';
import BoardDetailPage from './pages/BoardDetailPage';
import AddBoardPage from './pages/AddBoardPage';
import VerificationPage from './pages/VerificationPage';
import ProtectedRoute from './ProtectedRoute';
import { useDispatch } from 'react-redux';
import { setUserdata } from './modules/Profile';

const App = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(() => {
    const name = window.sessionStorage.getItem('name');
    const email = window.sessionStorage.getItem('email');
    const gender = window.sessionStorage.getItem('gender');
    const phone = window.sessionStorage.getItem('phone');
    
    if (name){
      dispatch(setUserdata({
        name: name,
        email: email,
        gender: gender,
        phone: phone
      }));
      navigate(-1)
    }
  },[])

  return (
    <>
      <ScrollToTop/>
      <Routes>
        <Route path='/verification' element={<VerificationPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='/' element={<ProtectedRoute><HomePage/></ProtectedRoute>}/>
        <Route path='/result' element={<ProtectedRoute><ResultPage/></ProtectedRoute>}/>
        <Route path='/addschedule1' element={<ProtectedRoute><ScheduleAdd_1/></ProtectedRoute>}></Route>
        <Route path='/addschedule2' element={<ProtectedRoute><ScheduleAdd_2/></ProtectedRoute>}></Route>
        <Route path='/addschedule3' element={<ProtectedRoute><ScheduleAdd_3/></ProtectedRoute>}></Route>
        <Route path='/addschedule4' element={<ProtectedRoute><ScheduleAdd_4/></ProtectedRoute>}></Route>
        <Route path='/addschedule5' element={<ProtectedRoute><ScheduleAdd_5/></ProtectedRoute>}></Route>
        <Route path='/addpet' element={<ProtectedRoute><AddpetPage/></ProtectedRoute>}></Route>
        <Route path='/pet/:id' element={<ProtectedRoute><PetDetailPage/></ProtectedRoute>}></Route>
        <Route path='/profilechange/:id' element={<ProtectedRoute><ProfileChangePage/></ProtectedRoute>}></Route>
        <Route path='/board/:id' element={<ProtectedRoute><BoardDetailPage/></ProtectedRoute>}></Route>
        <Route path='/addboard' element={<ProtectedRoute><AddBoardPage/></ProtectedRoute>}></Route>
        <Route path='/edit/pet/:id' element={<ProtectedRoute><AddpetPage/></ProtectedRoute>}></Route>
        <Route path='/edit/board/:id' element={<ProtectedRoute><AddBoardPage/></ProtectedRoute>}></Route>
      </Routes>
    </>
  );
}

export default App;
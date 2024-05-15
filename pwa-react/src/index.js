import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import rootReducer from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
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
import ScrollToTop from './ScrollToTop';


const store = createStore(rootReducer, composeWithDevTools());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path='/' Component={HomePage}/>
        <Route path='/result' Component={ResultPage}/>
        <Route path='/addschedule1' Component={ScheduleAdd_1}></Route>
        <Route path='/addschedule2' Component={ScheduleAdd_2}></Route>
        <Route path='/addschedule3' Component={ScheduleAdd_3}></Route>
        <Route path='/addschedule4' Component={ScheduleAdd_4}></Route>
        <Route path='/addschedule5' Component={ScheduleAdd_5}></Route>
        <Route path='/addpet' Component={AddpetPage}></Route>
        <Route path='/pet/:id' Component={PetDetailPage}></Route>
        <Route path='/profilechange/:id' Component={ProfileChangePage}></Route>
        <Route path='/board/:id' Component={BoardDetailPage}></Route>
        <Route path='/addboard' Component={AddBoardPage}></Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

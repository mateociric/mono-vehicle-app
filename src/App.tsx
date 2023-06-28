import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from 'component/Header/Header';
import Homepage from 'page/Homepage/Homepage';
import Favorite from 'page/Favorite/Favorite';
import Help from 'page/Help/Help';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/*' element={<Homepage />}></Route>
        <Route path='/Favorite' element={<Favorite />}></Route>
        <Route path='/Help' element={<Help />}></Route>
      </Routes>
    </>
  );
}

export default App;
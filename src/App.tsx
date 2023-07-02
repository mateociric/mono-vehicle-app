import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from 'component/Navbar/Navbar';
import Homepage from 'page/Homepage/Homepage';
import Update from 'page/Update/Update';
import Help from 'page/Help/Help';
import THref from 'model/model-navbar-href';
import Menu from 'component/Menu/Menu';

const href: THref = {
  homepage: {
    path: '/',
    linkName: 'HOMEPAGE',
  },
  update: {
    path: '/Update',
    linkName: 'UPDATE',
  },
  help: {
    path: '/Help',
    linkName: 'HELP',
  },
}

function App() {
  return (
    <div className='container'>
      <header className="header">
        <Navbar href={href}></Navbar>
      </header>

      <main className='main'>
        <Routes>
          <Route path='/*' element={<Homepage />}></Route>
          <Route path='/Update' element={<Update />}></Route>
          <Route path='/Help' element={<Help />}></Route>
        </Routes>
      </main>

      <aside className='aside'>
        <Menu />
      </aside>
    </div>
  );
}

export default App;
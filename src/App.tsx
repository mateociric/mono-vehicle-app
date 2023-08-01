import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from 'component/Navbar/Navbar';
import Homepage from 'page/Homepage/Homepage';
import UpdateCarList from 'page/UpdateCarList/UpdateCarList';
import Help from 'page/Help/Help';
import UpdateCarCard from 'page/UpdateCarCard/UpdateCarCard';
import Menu from 'component/Menu/Menu';

function App() {

  return (
    <div className='container'>
      <header className="header">
        <Navbar />
      </header>

      <main className='main'>
        <Routes>
          <Route path='/*' element={<Homepage />}></Route>
          <Route path='/UpdateCarList/*' element={<UpdateCarList />}></Route>
          <Route path='/Help/*' element={<Help />}></Route>
          <Route path='/UpdateCarCard/:id' element={<UpdateCarCard />}></Route>
        </Routes>
      </main>

      <aside className='aside'>
        <Menu />
      </aside>
    </div>
  );
}

export default App;
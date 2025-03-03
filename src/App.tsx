
import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import FullPie from './pages/FullPie'


function App() {

 
  return (
    <div className="App">
      <div className="wrapper">
        <Header/>
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/pies/:id' element={<FullPie/>}/>
            <Route path='*' element={<NotFound/>}/>

          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;


import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import Products from './components/Products/Products';
import Register from './components/Register/Register';
import ReguireAuth from './components/ReguireAuth/ReguireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/products' element={<ReguireAuth><Products></Products></ReguireAuth>}></Route>
        <Route path='/orders' element={<ReguireAuth><Orders></Orders></ReguireAuth>}></Route>
     </Routes>
    </div>
  );
}

export default App;

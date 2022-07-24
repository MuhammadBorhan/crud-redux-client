import './App.css';
import Navbar from './pages/Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ShowItems from './features/ShowItems';
import AddItems from './features/AddItems';
import EditItems from './features/EditItems';
import Error from './pages/Error';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/showitem' element={<ShowItems></ShowItems>}></Route>
        <Route path='/additem' element={<AddItems></AddItems>}></Route>
        <Route path='/edititem' element={<EditItems></EditItems>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
    </div>
  );
}

export default App;

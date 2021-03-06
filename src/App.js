import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Shared_pages/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Contact from './Pages/Home/Contact';
import About from './Pages/About';
import Login from './Pages/Login';
import Services from './Pages/Home/Services';
import Loading from './Shared_pages/Loading';
import NotFound from './Shared_pages/NotFound';
import Footer from './Shared_pages/Footer';
import Blogs from './Pages/Blogs';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import RequireAuth from './Pages/RequireAuth';

function App() {
  return (
    <div className="App">
     <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='home' element={<Home></Home>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='login' element={<Login></Login>}></Route>
      <Route path='register' element={<Register></Register>}></Route>
      <Route path='blogs' element={<Blogs></Blogs>}></Route>
      <Route path='checkout' element={<RequireAuth><Checkout></Checkout></RequireAuth>}></Route>
      <Route path='services' element={<Services></Services>}></Route>
      <Route path='loading' element={<Loading></Loading>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;

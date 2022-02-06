import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import MainHome from './components/Home/MainHome/MainHome';
import Teams from './components/Teams/Teams';
import Footer from './components/Shared/Footer/Footer';
import Header from './components/Shared/Header/Header';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Gallery from './components/Gallery/Gallery';
import Register from './components/Shared/Login/Register/Register';

function App() {
  return (
    <>
      <Router>
      <Header></Header>
        <Routes>
          <Route exact path='/' element={<MainHome></MainHome>}></Route>
          <Route path='/home' element={<MainHome></MainHome>}></Route>
          <Route path='/teams' element={<Teams></Teams>}></Route>
          <Route path='/admindashboard' element={<AdminDashboard></AdminDashboard>}></Route>
          <Route path='/gallery' element={<Gallery></Gallery>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </>
  );
}

export default App;

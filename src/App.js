import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import Todo from './components/Todo';
import Calculator from './components/Calculator';
import Search from './components/Search/Search';
import Filter from './components/Filter/Filter';
import GridToList from './components/GridToList/GridToList';
import SignUp from './components/SignUp-Login/SignUp';
import Login from './components/SignUp-Login/Login';
import SignupLogin from './components/SignUp-Login/SignupLogin';
// import Fan from './components/Fan-simulation/FanComp';
import MainPage from './components/WishlistFunctionality/MainPage';
import DigiClock from './components/DigitalClock/DigiClock';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='/' element={<Dashboard />}/>
            <Route path='/todo' element={<Todo />}/>
            <Route path='/calculator' element={<Calculator />}/>
            <Route path='/search' element={<Search />}/>
            <Route path='/filter' element={<Filter />}/>
            <Route path='/grid-to-list' element={<GridToList />}/>
            <Route path='/signup' element={<SignUp />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup-login' element={<SignupLogin />}/>
            {/* <Route path='/fan' element={<Fan />}/> */}
            <Route path='/wishlist' element={<MainPage />}/>
            <Route path='/digital-clock' element={<DigiClock />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

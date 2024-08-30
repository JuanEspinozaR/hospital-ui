import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavigationBar from './component/layout/NavBar';
import { Home } from './pages/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddDoctor from './component/doctor/AddDoctor'
import EditDoctor from './component/doctor/EditDoctor';
import SignupForm from './component/doctor/ViewDoctor';
function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='add-doctor' element={<AddDoctor />} />
          <Route exact path='view-doctor' element={<SignupForm />} />
          <Route exact path='edit-doctor/:id' element={<EditDoctor />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;

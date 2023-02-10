import './App.css';
import {Routes,Route, Navigate} from 'react-router-dom'
import React, { Component } from 'react'
import Login from './component/Login.js'
import Dashboard from './component/Dashboard.js'
import Navbar from './component/Navbar.js'

 class App extends Component {
  render() {
    return (
      <>
       <Navbar/>
      <Routes>
        <Route path='/' element={ <Navigate to="/Login"/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='*' element={<Login/>}></Route>
      </Routes>

      </>
     
    )
  }
}
      
// export const NavigateLogin = () => {
//   const navigate=useNavigate();
//   return (<Login navigate={navigate}/>)
// }


export default App;

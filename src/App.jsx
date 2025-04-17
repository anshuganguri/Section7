import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Lab1 from './Components/Lab1'
import Lab2 from './Components/Lab2'  
import Lab3 from './Components/Lab3'
import Lab4 from './Components/Lab4'
import Lab5 from './Components/Lab5'
import Lab10a from './Components/Lab10'
import { Link } from 'react-router-dom'
import { colors } from '@mui/material'
import MyAPICRUD from './Components/MyAPICRUD'
import Lab12 from './Components/Lab12'
// import Login from './Components/Login'
import UserDashboard from './Components/UserDboard'
import AdminDashboard from './Components/AdminDboard'
// import Error from './Components/Error'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to lab experiment-section 7</h1>
      <table width="70%" border="2">
        <tr style={{ backgroundColor: "orange" }}>
          <td>Sno.</td>
          <td>Lab</td>
          <td>Description</td>
        </tr>
        <tr>
          <td>1</td>
          <td><Link to="/Lab1">Lab1</Link></td>
          <td>Alignment and css</td>
        </tr>
        <tr>
          <td>2</td>
          <td><Link to="/Lab2">Lab2</Link></td>
          <td>DOM-Tree,media class,flex</td>
        </tr>
        <tr>
          <td>3</td>
          <td><Link to="/Lab3">Lab3</Link></td>
          <td>React props and state</td>
        </tr>
        <tr>
          <td>4</td>
          <td><Link to="/Lab4">Lab4</Link></td>
          <td>Description</td>
        </tr>
        <tr>
          <td>5</td>
          <td><Link to="/Lab5">Lab5</Link></td>
          <td>Login Page with Bootstrap and Material UI</td>
        </tr>
        <tr>
          <td>6</td>
          <td><Link to="/Lab6">Lab6</Link></td>
          <td>Axios Access API</td>
        </tr>
        <tr>
          <td>7</td>
          <td><Link to="/Profile">Profile Card</Link></td>
          <td>exam</td>
        </tr>
        <tr>
          <td>8</td>
          <td><Link to="/Lab8">Lab8</Link></td>
          <td>task 8</td>
        </tr>
        <tr>
          <td>9</td>
          <td><Link to="MyAPICRUD">MyAPICRUD</Link></td>
          <td>task 8</td>
        </tr>
        <tr>
          <td>12</td>
          <td><Link to="Lab12">Lab12</Link></td>
          <td>task 12</td>
        </tr>
        <tr>
          <td>12</td>
          <td><Link to="Login">Login</Link></td>
          <td>task 12</td>
        </tr>
        <tr>
          <td>12</td>
          <td><Link to="UserDboard">UserDashboard</Link></td>
          <td>task 12</td>
        </tr>
        <tr>
          <td>12</td>
          <td><Link to="AdminDboard">AdminDashboard</Link></td>
          <td>task 12</td>
        </tr>
        <tr>
          <td>12</td>
          <td><Link to="lab10a">log</Link></td>
          <td>task 12</td>
        </tr>
        
        
      </table>
      
      
    </>
  )
}

export default App
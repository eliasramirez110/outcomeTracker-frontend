import { useState } from 'react'
import axios from 'axios'
import env from 'react-dotenv'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitForm = (e) => {
    e.preventDefault()
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`, { email, password })
    .then((response) => {
      localStorage.setItem('userId', response.data.user.id)
      props.setUser(response.data.user)
    })
    
  }
  
  return (
    <div> 
      <h1>Outcomes Tracker LogIn</h1>
      <form onSubmit={submitForm} className="m-5">
        <div className="mx-auto">
        <div>
          <label htmlFor="email">Email:</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
          
        <div>
          <label htmlFor="password">Password:</label>
          <input className="" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div>
          <input type="submit" value="Log In!" />
        </div>
        </div>
      </form>
    </div>
  )
}

export default Login

import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav>
     

      {props.user.id ?
        
          <span 
          onClick={() => {
            localStorage.removeItem('userId')
            props.setUser({})
          }}
          >Logout</span>
      :
        <span>
          <Link to="/signup">SignUp</Link>
          {' | '}
          <Link to="/login">LogIn</Link>
        </span>
      }
    </nav>
  )
}

export default NavBar
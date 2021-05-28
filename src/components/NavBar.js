import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return (
    <nav className="m-2">
     

      {props.user.id ?
        
          <h4 
          onClick={() => {
            localStorage.removeItem('userId')
            props.setUser({})
          }}
          >Logout</h4>
      :
        <h4>
          <Link to="/signup">SignUp</Link>
          {' | '}
          <Link to="/login">LogIn</Link>
        </h4>
      }
    </nav>
  )
}

export default NavBar
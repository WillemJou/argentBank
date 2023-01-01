import { Link } from 'react-router-dom'
import './signInLink.css'

export function SignInLink() {
  return (
    <div>
      <Link className="main-nav-item" to="./sign-in.html">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  )
}

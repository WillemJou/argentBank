import { Link } from 'react-router-dom'
import './signInLink.css'

export function SignInLink() {
  // écrire ici la condition qui retourne le nom de l'user et la posibilité de logout
  return (
    <div>
      <Link className="main-nav-item" to="/sign-in">
        <i className="fa fa-user-circle"></i>
        Sign In
      </Link>
    </div>
  )
}

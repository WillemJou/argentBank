import argentBankLogo from '../../assets/img/argentBankLogo.png'
import { Link } from 'react-router-dom'
import './homeLink.css'

export function HomeLink() {
  const logo = argentBankLogo
  return (
    <Link className="main-nav-logo" to="/">
      <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  )
}

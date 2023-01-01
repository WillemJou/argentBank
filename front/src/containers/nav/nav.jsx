import { HomeLink } from '../../components/nav/homeLink'
import { SignInLink } from '../../components/nav/signInLink'
import './nav.css'

export function Nav() {
  return (
    <nav className="main-nav">
      <HomeLink />
      <SignInLink />
    </nav>
  )
}

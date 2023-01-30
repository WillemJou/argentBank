import { Form } from '../../components/form/form'
import { useLocation } from 'react-router-dom'
import './mainSignIn.css'

export function Main() {
  const location = useLocation()
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>{location.pathname === '/sign-up' ? 'Sign Up' : 'Sign In'}</h1>
        <Form />
      </section>
    </main>
  )
}

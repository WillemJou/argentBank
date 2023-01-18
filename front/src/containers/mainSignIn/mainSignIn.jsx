import { Form } from '../../components/form/form'
import './mainSignIn.css'

export function Main({ props }) {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>{props ? 'Sign Up' : 'Sign In'}</h1>
        <Form props={props} />
      </section>
    </main>
  )
}

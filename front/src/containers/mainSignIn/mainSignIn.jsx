import { Form } from '../../components/form/form'
import { useState } from 'react'
import './mainSignIn.css'

export function Main() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>signin</h1>
        <Form />
      </section>
    </main>
  )
}

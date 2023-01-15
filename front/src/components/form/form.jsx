import { Button } from '../button/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { getToken, createUser } from '../../Api'
import {
  addEmail,
  addPassword,
  addFirstName,
  addLastName,
} from '../../stateManagment/reducer'
import './form.css'

export function Form() {
  const { register, handleSubmit } = useForm()
  const [showSignup, setShowSignup] = useState(false)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  async function signInFormData(data, e) {
    e.preventDefault()
    getToken(data, navigate, dispatch)
    dispatch(addEmail(data.email))
    dispatch(addPassword(data.password))
  }
  async function signUpFormData(data) {
    createUser(data, navigate, dispatch)
    dispatch(addEmail(data.body.email))
    dispatch(addPassword(data.body.password))
    dispatch(addFirstName(data.body.firstName))
    dispatch(addLastName(data.body.lastName))
  }
  function showSignupForm() {
    setShowSignup(!showSignup)
  }

  return (
    <>
      {showSignup ? (
        <form onSubmit={handleSubmit(signUpFormData)}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" {...register('email')} required />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              {...register('password')}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firsName">First name</label>
            <input
              type="text"
              id="firstName"
              {...register('firstName')}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              {...register('lastName')}
              required
            />
          </div>
          <Button
            classes={'sign-up-submit-button'}
            type="submit"
            name="Sign Up"
            onClick={() => {
              handleSubmit(signUpFormData)
            }}
          />
        </form>
      ) : (
        <>
          <form onSubmit={handleSubmit(signInFormData)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                {...register('email')}
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                {...register('password')}
                required
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button classes={'sign-in-button'} type="submit" name="Sign In" />
          </form>
          <div className="sign-up-container">
            <button
              className="sign-up-button"
              type="button"
              name="Sign Up"
              onClick={showSignupForm}
            >
              Sign Up
            </button>
          </div>
        </>
      )}
    </>
  )
}

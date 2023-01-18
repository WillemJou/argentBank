import { Button } from '../button/button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getToken, createUser } from '../../Api'
import {
  addEmail,
  addPassword,
  addFirstName,
  addLastName,
  addError,
} from '../../stateManagment/reducer'
import './form.css'
import { Error } from '../../pages/error/error'

export function Form({ props }) {
  const { register, handleSubmit, getValues } = useForm()
  const dispatch = useDispatch()
  let navigate = useNavigate()
  const errormsg = useSelector((state) => state.userAuthInfos.error)

  async function signInFormData(data, e) {
    e.preventDefault()
    getToken(data, navigate, dispatch)
    dispatch(addEmail(data.email))
    dispatch(addPassword(data.password))
    dispatch(addError(data.error))
  }
  async function signUpFormData(data) {
    createUser(data, navigate, dispatch)
    dispatch(addEmail(data.body.email))
    dispatch(addPassword(data.body.password))
    dispatch(addFirstName(data.body.firstName))
    dispatch(addLastName(data.body.lastName))
  }
  function rememberMe() {
    let rememberCheck = getValues('remember')
    let emailInput = getValues('email')
    let password = getValues('password')
    if (rememberCheck !== null) {
      localStorage.email = emailInput
      localStorage.password = password
    }
  }

  return (
    <>
      {props ? (
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
            {errormsg ? <Error message={errormsg} /> : null}
            <div className="input-remember">
              <label htmlFor="remember-me">Remember me</label>
              <input
                type="checkbox"
                id="remember-me"
                name="remember"
                {...register('remember')}
              />
            </div>
            <Button
              classes={'sign-in-button'}
              type="submit"
              name="Sign In"
              click={rememberMe}
            />
          </form>
          <div className="sign-up-container">
            <Link
              to={'/sign-up'}
              className="sign-up-button"
              type="button"
              name="Sign Up"
            >
              Sign Up
            </Link>
          </div>
        </>
      )}
    </>
  )
}

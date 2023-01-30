import { Button } from '../button/button'
import { useDispatch, useSelector } from 'react-redux'
import { toggleOff, toggleOn } from '../../stateManagment/reducer'
import { useNavigate, Link, useLocation } from 'react-router-dom'
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
import { useEffect } from 'react'

export function Form() {
  let navigate = useNavigate()
  let location = useLocation()
  const { register, handleSubmit, getValues, setValue } = useForm()
  const dispatch = useDispatch()
  const errormsg = useSelector((state) => state.userAuthInfos.error)
  const switchValue = useSelector((state) => state.switch.active)

  const handleChange = () => {
    !switchValue ? dispatch(toggleOn()) : dispatch(toggleOff())
  }
  async function signInFormData(data, e) {
    getToken(data, navigate, dispatch)
    e.preventDefault()
    dispatch(addEmail(data.email))
    dispatch(addPassword(data.password))
    dispatch(addError(data.error))
  }
  async function signUpFormData(data) {
    createUser(data, navigate, dispatch)
    dispatch(addEmail(data.email))
    dispatch(addPassword(data.password))
    dispatch(addFirstName(data.firstName))
    dispatch(addLastName(data.lastName))
    dispatch(addError(data.error))
  }
  async function rememberMe() {
    let emailValue = getValues('email')
    let passwordValue = getValues('password')
    let email = addEmail(emailValue)
    let password = addPassword(passwordValue)
    let emailStored = window.localStorage.setItem(
      'emailData',
      JSON.stringify(email)
    )
    let passwordStored = window.localStorage.setItem(
      'passwordData',
      JSON.stringify(password)
    )
    return { emailStored, passwordStored }
  }
  useEffect(() => {
    const email = window.localStorage.getItem('emailData')
    const password = window.localStorage.getItem('passwordData')
    if (email && password) {
      const emailValue = JSON.parse(email)
      const passwordValue = JSON.parse(password)
      setValue('email', emailValue.payload)
      setValue('password', passwordValue.payload)
    }
  }, [])

  return (
    <>
      {location.pathname === '/sign-up' ? (
        <form onSubmit={handleSubmit(signUpFormData)}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              {...register('email')}
              autoFocus
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
          <div className="input-wrapper">
            <label htmlFor="firsName">First name</label>
            <input
              type="text"
              id="firstName"
              minLength="2"
              maxLength="10"
              {...register('firstName')}
              required
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              minLength="2"
              maxLength="10"
              {...register('lastName')}
              required
            />
          </div>
          {errormsg ? <Error message={errormsg} /> : null}
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
                autoFocus
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
                onClick={handleChange}
                {...register('remember')}
              />
            </div>
            <Button
              classes={'sign-in-button'}
              type="submit"
              name="Sign In"
              click={switchValue ? rememberMe : null}
            />
          </form>
          <div className="sign-up-container">
            <Link
              to="/sign-up"
              className="sign-up-button"
              type="button"
              onClick={handleChange}
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

import { Button } from '../button/button'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { getToken } from '../../Api'
import { addEmail, addPassword } from '../../stateManagment/reducer'
import './form.css'

export function Form() {
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  let navigate = useNavigate()

  async function formData(data, e) {
    e.preventDefault()
    getToken(data, navigate, dispatch)
    dispatch(addEmail(data.email))
    dispatch(addPassword(data.password))
  }
  return (
    <form onSubmit={handleSubmit(formData)}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register('email')} required />
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
  )
}

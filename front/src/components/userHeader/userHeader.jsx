import { Button } from '../button/button'
import './userHeader.css'
import { changeName } from '../../Api'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function UserHeader({ firstName, lastName }) {
  const [showEditName, setShowEditName] = useState(false)
  const dispatch = useDispatch()
  const profileToken = useSelector((state) => state.userAuthInfos.token)
  const { register, handleSubmit } = useForm()
  function showForm() {
    setShowEditName(!showEditName)
  }
  function submitName(data) {
    changeName(data, profileToken, dispatch)
    setShowEditName(false)
  }

  return (
    <>
      {showEditName ? (
        <div className="header">
          <h1>Welcome back</h1>
          <Button submit={showForm} classes="edit-button" name="Edit name" />
          <form onSubmit={handleSubmit(submitName)}>
            <div className="global-container">
              <div className="inputs-container">
                <label htmlFor="firsName"></label>
                <input
                  className="inputs"
                  type="text"
                  placeholder={firstName}
                  id="firsName"
                  {...register('firstName')}
                />
                <label htmlFor="lastName"></label>
                <input
                  className="inputs"
                  placeholder={lastName}
                  type="text"
                  id="lastName"
                  {...register('lastName')}
                />
              </div>
              <div className="btn-container">
                <button
                  id="buttonSaveName"
                  type="submit"
                  onClick={() => {
                    handleSubmit(changeName)
                  }}
                >
                  Save
                </button>
                <button
                  id="buttonCancelName"
                  type="button"
                  onClick={() => setShowEditName(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstName} {lastName}
          </h1>
          <Button click={showForm} classes="edit-button" name="Edit name" />
        </div>
      )}
    </>
  )
}

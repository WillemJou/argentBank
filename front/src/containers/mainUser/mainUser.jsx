import { Account } from '../../components/account/account'
import { UserHeader } from '../../components/userHeader/userHeader'
import { getUserData } from '../../Api'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './mainUser.css'

export function Main() {
  const profileToken = useSelector((state) => state.userAuthInfos.token)
  const firstName = useSelector((state) => state.userAuthInfos.firstName)
  const lastName = useSelector((state) => state.userAuthInfos.lastName)

  let navTo = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (profileToken !== null) {
      navTo('/user')
    } else {
      navTo('/sign-in')
    }
  }, [navTo, profileToken])

  useEffect(() => {
    getUserData(profileToken, dispatch)
  }, [])

  return (
    <main className="main bg-dark">
      <UserHeader firstName={firstName} lastName={lastName} />
      <h2 className="sr-only">Accounts</h2>
      <Account
        title="Argent Bank Checking (x8349)"
        ammount="$2,082.79"
        balance="Available Balance"
      />
      <Account
        title="Argent Bank Savings (x6712)"
        ammount="$10,928.42"
        balance="Available Balance"
      />
      <Account
        title="Argent Bank Credit Card (x8349)"
        ammount="$184.30"
        balance="Current Balance"
      />
    </main>
  )
}

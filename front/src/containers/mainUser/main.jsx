import { Account } from '../../components/account/account'
import { UserHeader } from '../../components/userHeader/userHeader'
import './main.css'

export function Main() {
  return (
    <main className="main bg-dark">
      <UserHeader />
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

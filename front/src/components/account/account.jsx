import { Button } from '../button/button'
import './account.css'

export function Account({ title, ammount, balance }) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{ammount}</p>
        <p className="account-amount-description">{balance}</p>
      </div>
      <div className="account-content-wrapper cta">
        <Button classes={'transaction-button'} name="View transactions" />
      </div>
    </section>
  )
}

import { Button } from '../../components/button/button'
import './userHeader.css'

export function UserHeader({ firstName, lastName }) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}
      </h1>
      <Button classes="edit-button" name="Edit name" />
    </div>
  )
}

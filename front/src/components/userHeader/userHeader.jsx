import { Button } from '../../components/button/button'
import './userHeader.css'

export function UserHeader({ userName }) {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {userName}
      </h1>
      <Button classes="edit-button" name="Edit name" />
    </div>
  )
}

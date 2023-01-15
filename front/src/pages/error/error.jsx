import './error.css'

export function Error({ errorName }) {
  return (
    <div className="error">
      Error <br />
      {errorName.message}
    </div>
  )
}

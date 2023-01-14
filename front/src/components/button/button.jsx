import './button.css'

export function Button({ name, classes, submit }) {
  return (
    <button onClick={submit} className={classes}>
      {name}
    </button>
  )
}

import './button.css'

export function Button({ name, classes, click }) {
  return (
    <button onClick={click} className={classes}>
      {name}
    </button>
  )
}

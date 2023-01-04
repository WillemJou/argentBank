import './button.css'

export function Button({ name, classes }) {
  return <button className={classes}>{name}</button>
}

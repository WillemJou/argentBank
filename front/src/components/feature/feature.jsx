import './feature.css'

export function Feature({ img, slogan, speach }) {
  return (
    <div className="feature-item">
      <img src={img} alt="Chat Icon" className="feature-icon" />
      <h3 className="feature-item-title">{slogan}</h3>
      <p>{speach}</p>
    </div>
  )
}

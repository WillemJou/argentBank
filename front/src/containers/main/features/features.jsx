import { Feature } from '../../../components/main/feature/feature'
import './features.css'
import iconChat from '../../../assets/img/iconChat.png'
import iconMoney from '../../../assets/img/iconMoney.png'
import iconSecurity from '../../../assets/img/iconSecurity.png'
export function Features() {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
      <Feature
        img={iconChat}
        slogan="You are our #1 priority"
        speach="  Need to talk to a representative? You can get in touch through our
        24/7 chat or through a phone call in less than 5 minutes."
      />
      <Feature
        img={iconMoney}
        slogan="More savings means higher rates"
        speach="The more you save with us, the higher your interest rate will be!"
      />
      <Feature
        img={iconSecurity}
        slogan="Security you can trust"
        speach="We use top of the line encryption to make sure your data and money is always safe."
      />
    </section>
  )
}

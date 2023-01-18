import { Footer } from '../../containers/footer/footer'
import { Main } from '../../containers/mainSignIn/mainSignIn'
import { Nav } from '../../containers/nav/nav'

export function SignInPage({ props }) {
  return (
    <>
      <Nav />
      <Main props={props} />
      <Footer />
    </>
  )
}

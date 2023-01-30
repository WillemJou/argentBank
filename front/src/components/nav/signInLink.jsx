import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toggleOff } from '../../stateManagment/reducer'
import { resetStore } from '../../stateManagment/store'
import './signInLink.css'

export function SignInLink() {
  const dispatch = useDispatch()
  const profileToken = useSelector((state) => state.userAuthInfos.token)
  const profilFirstName = useSelector((state) => state.userAuthInfos.firstName)
  const profilLogOut = () => {
    dispatch(resetStore())
  }

  return (
    <>
      {profileToken !== null ? (
        <div>
          <Link className="main-nav-item" to="/user">
            <i className="fa fa-user-circle"></i>
            {profilFirstName}
          </Link>
          <Link className="main-nav-item" to="/" onClick={() => profilLogOut()}>
            Logout
            <button className="button" onClick={() => profilLogOut()}>
              <i className="fa fa-sign-out button logout"></i>
            </button>
          </Link>
        </div>
      ) : (
        <div>
          <Link
            className="main-nav-item"
            onClick={() => dispatch(toggleOff())}
            to="/sign-in"
          >
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      )}
    </>
  )
}

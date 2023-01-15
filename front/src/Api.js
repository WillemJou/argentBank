import axios from 'axios'
import { Error } from './pages/error/error';
import { addToken, addFirstName, addLastName, addId, addEmail, addPassword } from './stateManagment/reducer';

const baseApi = `http://localhost:3001/api/v1`
  
export async function getToken(data, navigate, dispatch){
   await axios
  .post(`${baseApi}/user/login`, data)
  .then(response => {
            if(response.status === 200){
                dispatch(addToken(response.data.body.token))
                navigate('/user')
            }
    return response.data
}).catch( error =>  <Error errorName={error} />
  )
}

export async function getUserData(token, dispatch){
    await axios
    .post(`${baseApi}/user/profile`, token,
        {headers: {
            'Authorization': 'Bearer ' + token
        }} 
        )
        .then(response => {
        if(response.status === 200){
                dispatch(addId(response.data.body.id))
                dispatch(addFirstName(response.data.body.firstName))
                dispatch(addLastName(response.data.body.lastName))
         }
            return response
        }).catch(error => {
            console.log('Error data: ', error)})
}

export async function changeName(data, token, dispatch) {
    await axios
    .put(`${baseApi}/user/profile`, data,
    {headers: {
        'Authorization': 'Bearer ' + token
    }}
    )
    .then(response => {
        if(response.status === 200){
            dispatch(addFirstName(response.data.body.firstName))
            dispatch(addLastName(response.data.body.lastName))
        }
        return response
    }).catch(error => {
        console.log('Error data put name', error)
    })
}

export async function createUser(data, navigate, dispatch) {
    await axios.post(`${baseApi}/user/signup`, data)
    .then(response => {
        if(response.status === 200){
            dispatch(addEmail(response.data.body.email))
            dispatch(addPassword(response.data.body.password))
            dispatch(addFirstName(response.data.body.firstName))
            dispatch(addLastName(response.data.body.lastName))
            navigate("/")
        }
        return response
    }).catch(error => {
        console.log('Error data create user', error)
    })
}

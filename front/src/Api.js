import axios from 'axios'
import { addToken, addFirstName, addLastName, addId } from './stateManagment/reducer';

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
}).catch(error => {
    console.log('Error data token: ', error)})
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

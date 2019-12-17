
import axios from 'axios';

export default {
  login: async (user,password) => 
  await axios.post(`/api/login`,{user,password})
    .then(res => {
      return res.data || []
    })
    .catch(err => {
      return err.response.data
    })
    ,
  register: async (user,password) => 
  await axios.post(`/api/register/` + user,{user,password})
    .then(res => {
      return res.data || []
    })
    .catch(err => {
      return err.response.data
    })
}
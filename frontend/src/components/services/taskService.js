
import axios from 'axios';

export default {
  getAll: async (user) => {
    let res = await axios.get(`/api/task/` + user);
    return res.data || [];
  },

  add: async (name,description,user) => {
    let res = await axios.post('/api/task',{name,description,user});
    return res.data || [];
  },

  delete: async (id) => {
    console.log(id);
    let res = await axios.delete(`/api/task/` + id);
    return res.data || [];
  },

  modify: async (id,name,description,completed) => {
    let res = await axios.put(`/api/task/` + id,{name,description,completed});
    return res.data || [];
  }

}
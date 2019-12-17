
import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/task`);
    return res.data || [];
  },

  add: async (name,description) => {
    let res = await axios.post('/api/task',{name,description});
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
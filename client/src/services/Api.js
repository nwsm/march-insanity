import axios from 'axios'
import store from '../store/index'

export default {
  getGroups : function () {
    return axios.get('/GROUPS')
  },

  getUser : function (id) {
    return axios.get('/USERS/' + id)
  },

  insertUser : function (id,em,fn) {
    return axios.post('/USERS/',{
      userID:id,
      email:em,
      name:fn
    });
  },

  loginGoogle : function (id) {
    return axios.post('/auth/google/',{ token : id })
  },

  getBracketCollection : function (bcid) {
    return axios.get('/BRACKETCOLLECTIONS/'+bcid)
  },

  createBracketCollection : async function(bcNum,userid,bcid) {

      await axios.post('/BRACKETCOLLECTIONS',{
        CollectionID : bcid
      })
      await axios.put('/USERS/UPDATEBC', {
        userID : userid,
        bracketCollectionID : bcid,
        num : bcNum
      })

      return;

  },

}

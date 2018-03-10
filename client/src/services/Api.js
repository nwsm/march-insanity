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
    return axios.get('/BRACKETCOLLECTIONS/',{
      id : bcid
    })
  },

  insertBracketCollection : function(id) { //weird shit I'm doing here
    axios.post('/BRACKETCOLLECTIONS/',{
      CollectionID : store.state.user.userID + '-#' + id
    }).then(function(r) {
      var bcs = []
      bcs[0]=store.state.user.bracketCollection1
      bcs[1]=store.state.user.bracketCollection2
      bcs[2]=store.state.user.bracketCollection3

      bcs[id-1]=store.state.user.userID + '-#' + id
      axios.put('/USERS/', {
        userID : store.state.user.userID,
        email : store.state.user.email,
        bracketCollection1 : bcs[0],
        bracketCollection2 : bcs[1],
        bracketCollection3 : bcs[2],
        name : store.state.user.name
      }).then(function () {
        axios.get('/USERS/'+store.state.user.userID).then(function (r){
          store.state.user=r.data[0]
        })
      })
    })
  }
}

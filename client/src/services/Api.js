import axios from 'axios'
import store from '../store/index'

export default {
  getGroups : function () {
    return axios.get('/GROUPS')
  },
  saveBracket : function () {
    return axios.put('/BRACKETS/', store.state.bracket)
  },
  getUser : function (id) {
    return axios.get('/USERS/' + id)
  },

  getTeams : function () {
    return axios.get('/TEAMS')
  },
  getGames : function () {
    return axios.get('/GAMES/')
  },
  getCurrentRound : function () {
    return axios.get('/CURRENTROUND/')
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

  getBracket : function (bid) {
    return axios.get('/BRACKET/'+bid)
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

  createGroup: async function (NewGroupName, userid) {
    await axios.post('/GROUPS/', {
      groupName: NewGroupName,
      groupAdmin: userid
    })

    return;
  },

  createUserGroup: async function (gName, uID) {
    await axios.post('/USERGROUP/', {
      groupName: gName,
      userID: uID
    })
  },

  getGroup: function (gName) {
    return axios.get('/GROUPS/' + gName)
  },

  getUserGroups: function (uID) {
    return axios.get('/USERGROUP/' + uID)
  },

  sendMail: function (email, gName) {
    console.log('SM: ' + email + ' ' + gName)
    axios.get('/SEND/' + email + '/' + gName)
  }

}

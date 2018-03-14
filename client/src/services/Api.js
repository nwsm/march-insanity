import axios from 'axios'
import store from '../store/index'
import config from '../config/config'

var path = config.apiPath

export default {
  getGroups : function () {
    return axios.get(path+'/GROUPS')
  },
  saveBracket : function () {
    return axios.put(path+'/BRACKETS/', store.state.bracket)
  },
  getUser : function (id) {
    return axios.get(path+'/USERS/' + id)
  },

  getTeams : function () {
    return axios.get(path+'/TEAMS')
  },
  getGames : function () {
    return axios.get(path+'/GAMES/')
  },
  getCurrentRound : function () {
    return axios.get(path+'/CURRENTROUND/')
  },

  getAppAdmins : function () {
    return axios.get(path+'/ADMINS/')
  },
  insertUser : function (id,em,fn) {
    return axios.post(path+'/USERS/',{
      userID:id,
      email:em,
      name:fn
    });
  },

  loginGoogle : function (id) {
    return axios.post(path+'/auth/google/',{ token : id })
  },

  loginFacebook : function (facebookUser) {
    return axios.post(path+'/auth/facebook/', {fbID: facebookUser.id, fbEmail: facebookUser.email, fbName: facebookUser.name})
  },

  getBracketCollection : function (bcid) {
    return axios.get(path+'/BRACKETCOLLECTIONS/'+bcid)
  },

  getBracket : function (bid) {
    return axios.get(path+'/BRACKET/'+bid)
  },

  createBracketCollection : async function(bcNum,userid,bcid) {

      await axios.post(path+'/BRACKETCOLLECTIONS',{
        CollectionID : bcid
      })
      await axios.put(path+'/USERS/UPDATEBC', {
        userID : userid,
        bracketCollectionID : bcid,
        num : bcNum
      })

      return;

  },

  createGroup: async function (NewGroupName, userid) {
    await axios.post(path+'/GROUPS/', {
      groupName: NewGroupName,
      groupAdmin: userid
    })

    return;
  },

  createUserGroup: async function (gName, uID) {
    await axios.post(path+'/USERGROUP/', {
      groupName: gName,
      userID: uID
    })
  },

  updateUserGroup: async function (userID, gname, bc) {
    await axios.put(path+'/USERGROUP/', {
      bracketCollection: bc,
      groupName: gname,
      userID: userID
    })
  },

  getGroup: function (gName) {
    return axios.get(path+'/GROUPS/' + gName)
  },

  getUserGroups: function (uID) {
    return axios.get(path+'/USERGROUP/' + uID)
  },

  getMembers: function (gname) {
    return axios.get(path+'/MEMBERS/' + gname)
  },

  sendMail: function (email, gName) {
    axios.get(path+'/SEND/' + email + '/' + gName)
  }

}

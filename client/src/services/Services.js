import api from './Api'
import store from '../store/index'

export default {
  updateCurrentRound() {
    var vm = this
    api.getCurrentRound().then(function (r) {
      store.state.currentRound = parseInt(r.data[0].settingValue)
    })
  }

}

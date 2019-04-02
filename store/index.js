export const state = () => {
  return {
    onWelcomeScreen: true,
    showType: ''
  }

}

export const mutations = {
  turnOffWelcoming(state) {
    state.onWelcomeScreen = false
  },
  changeShowType(state, payload) {
    state.showType = payload
  }
}

export const actions = {

}

export const getters = {

}

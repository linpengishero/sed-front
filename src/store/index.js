import { createStore } from 'vuex'

export default createStore({
    state: {
        currentAccount: null,
        currentMember:null,
        currentFather:null
    },
    mutations: {

    },
    actions: {
        setCurrentAccount({commit,state}, val){
            state.currentAccount = val
        },
        setCurrentMember({commit,state}, val){
            state.currentMember = val
        },
        setCurrentFather({commit,state}, val){
            state.currentFather = val
        }
    },
    modules: {
    }
})

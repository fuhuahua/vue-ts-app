import http from '@/utils/http';
import type { MutationTree, ActionTree, GetterTree } from 'vuex'
import type { State } from '../index'

interface Infos {
  [index: string]: unknown
}

export interface UsersState {
  token: string
  infos: Infos
}

const state: UsersState = {
   token: '',
  infos: {}
};

const mutations: MutationTree<UsersState> = {
   updateToken(state, payload){
    state.token = payload;
  },
  updateInfos(state, payload){
    state.infos = payload;
  },
  clearToken(state){
    state.token = '';
  }
};
const actions: ActionTree<UsersState, State> = {
  // login() {
  //   return http.post('api/auth/login', {
  //     email: 'huangrong@imooc.com',
  //     pass: 'huangrong'
  //   })
  // }
  login(context, payload){
    return http.post('/login', payload)
  },
  infos(){
    return http.get('/users/infos')
  }
};
const getters: GetterTree<UsersState, State> = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
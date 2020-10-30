import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export enum mutationsType {
  SET_TICKET = "SET_TICKET",
  SET_PHONE = "SET_PHONE",
  SET_NICKNAME = "SET_NICKNAME",
  SET_SCORE = "SET_SCORE",
}

interface StateType {
  ticket: string | null;
  phone: string | null;
  nickname: string;
  score: number;
}

export default new Vuex.Store<StateType>({
  state: {
    ticket: null,
    phone: null,
    nickname: "",
    score: 0,
  },
  mutations: {
    [mutationsType.SET_TICKET](state: StateType, payload: string) {
      state.ticket = payload;
    },
    [mutationsType.SET_PHONE](state: StateType, payload: string) {
      state.phone = payload;
    },
    [mutationsType.SET_NICKNAME](state: StateType, payload: string) {
      state.nickname = payload;
    },
    [mutationsType.SET_SCORE](state: StateType, payload: number) {
      state.score = payload;
    },
  },
  // actions: {},
  // modules: {},
});

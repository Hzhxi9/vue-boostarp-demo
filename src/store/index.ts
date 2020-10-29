import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const enum mutationsType {
    SET_TICKET = 'SET_TICKET',
}

interface StateType {
    ticket: string | null;
}

export default new Vuex.Store<StateType>({
    state: {
        ticket: null,
    },
    mutations: {
        [mutationsType.SET_TICKET](state, payload: string) {
            state.ticket = payload;
        },
    },
    // actions: {},
    // modules: {},
});

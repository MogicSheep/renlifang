/**
 * 异步提交状态--业务相关
 */
import * as types from "./types";

const actions = {
  [types.USER_INFO]({ commit }, payload) {
    commit(types.USER_INFO, payload);
  },
  [types.TOKEN]({ commit }, payload) {
    commit(types.TOKEN, payload);
  },
  [types.ROLE]({ commit }, payload) {
    commit(types.ROLE, payload);
  },
  [types.LIST]({ commit }, payload) {
    commit(types.LIST, payload);
  },
  [types.TOTAL]({ commit }, payload) {
    commit(types.TOTAL, payload);
  },
  [types.DETAIL]({ commit }, payload) {
    commit(types.DETAIL, payload);
  }
};

export default actions;

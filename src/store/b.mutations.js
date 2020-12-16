/**
 * 提交状态--业务相关
 */
import * as types from "./types";

const mutations = {
  [types.USER_INFO](state, payload) {
    state[types.USER_INFO] = payload ? Object.assign({}, payload) : null;
  },
  [types.TOKEN](state, payload) {
    state[types.TOKEN] = payload;
  },
  [types.ROLE](state, payload) {
    state[types.ROLE] = payload;
  },
  [types.LIST](state, payload) {
    state[types.LIST] = payload;
  },
  [types.TOTAL](state, payload) {
    state[types.TOTAL] = payload;
  },
  [types.DETAIL](state, payload) {
    state[types.DETAIL] = payload ? Object.assign({}, payload) : null;
  }
};

export default mutations;

/**
 * 获取状态--业务相关
 */
import * as types from "./types";

const getters = {
  [types.USER_INFO](state) {
    return state[types.USER_INFO];
  },
  [types.TOKEN](state) {
    return state[types.TOKEN];
  },
  [types.ROLE](state) {
    return state[types.ROLE];
  },
  [types.LIST](state) {
    return state[types.LIST];
  },
  [types.TOTAL](state) {
    return state[types.TOTAL];
  },
  [types.DETAIL](state) {
    return state[types.DETAIL];
  }
};

export default getters;

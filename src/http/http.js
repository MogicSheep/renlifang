/**
 * Http请求
 */
import axios from "axios";
import * as url from "./url";
import * as types from "../store/types";
import * as errors from "../assets/constant/errors";
import { BASE_URL } from "../assets/config/http.config";

axios.defaults.baseURL = BASE_URL;

const Http = {
  /**
   * 为axios设置token
   * @param {String} token
   */
  setToken(token) {
    axios.defaults.headers.common["Authorization"] = token;
  },
  /**
   * 清除token
   */
  clearToken() {
    window.$vue.$storage.remove(types.TOKEN);
    axios.defaults.headers.common["Authorization"] = "";
    window.$vue.$router.replace("/login");
    window.$vue.$message.error(errors.TOKEN_EXPIRE_TEXT);
  },
  /**
   * 登录
   * @param {String} account
   * @param {String} password
   */
  async doLogin(account, password) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append("account", account);
      params.append("password", password);
      axios
        .post(url.LOGIN, params)
        .then(res => {
          if (res.data.code === errors.SUCCESS) {
            resolve(res.data.data);
          } else if (res.data.code === errors.TOKEN_EXPIRE) {
            this.clearToken();
            reject(errors.TOKEN_EXPIRE_TEXT);
          } else {
            reject(res.data.message);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * 修改密码
   * @param {String} account
   * @param {String} oldPassword
   * @param {String} newPassword
   */
  async modifyPassword(account, oldPassword, newPassword) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append("account", account);
      params.append("oldPassword", oldPassword);
      params.append("newPassword", newPassword);
      axios
        .post(url.MODIFY_PASSWORD, params)
        .then(res => {
          if (res.data.code === errors.SUCCESS) {
            resolve("修改成功");
          } else if (res.data.code === errors.TOKEN_EXPIRE) {
            this.clearToken();
            reject(errors.TOKEN_EXPIRE_TEXT);
          } else {
            reject(res.data.message);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * 验证旧密码
   * @param {String} account
   * @param {String} oldPassword
   */
  async validOldPassword(account, oldPassword) {
    return new Promise((resolve, reject) => {
      const params = new URLSearchParams();
      params.append("account", account);
      params.append("oldPassword", oldPassword);
      axios
        .post(url.VALID_OLD_PASSWORD, params)
        .then(res => {
          if (res.data.code === errors.SUCCESS) {
            resolve("验证成功");
          } else if (res.data.code === errors.TOKEN_EXPIRE) {
            this.clearToken();
            reject(errors.TOKEN_EXPIRE_TEXT);
          } else {
            reject(res.data.message);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * 验证账号是否存在
   * @param {String} account
   */
  async validAccount(account) {
    return new Promise((resolve, reject) => {
      const params = {
        params: {
          account: account
        }
      };
      axios
        .get(url.VALID_ACCOUNT, params)
        .then(res => {
          if (res.data.code === errors.SUCCESS) {
            resolve("验证成功");
          } else if (res.data.code === errors.TOKEN_EXPIRE) {
            this.clearToken();
            reject(errors.TOKEN_EXPIRE_TEXT);
          } else {
            reject(res.data.message);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * 分页查询用户列表
   * @param {Object} condition
   */
  async queryUsers(condition) {
    return new Promise((resolve, reject) => {
      if (condition.dir === "ascending") {
        condition.dir = "asc";
      } else if (condition.dir === "descending") {
        condition.dir = "desc";
      }
      axios
        .post(url.QUERY_USERS, condition)
        .then(res => {
          if (res.data.code === errors.SUCCESS) {
            resolve(res.data);
          } else if (res.data.code === errors.TOKEN_EXPIRE) {
            this.clearToken();
            reject(errors.TOKEN_EXPIRE_TEXT);
          } else {
            reject(res.data.message);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * 保存用户
   * @param {Object} user
   */
  async saveUser(user) {
    return new Promise((resolve, reject) => {
      axios
        .post(url.SAVE_USER, user)
        .then(res => {
          if (res.data.code === errors.SUCCESS) {
            resolve(res.data);
          } else if (res.data.code === errors.TOKEN_EXPIRE) {
            this.clearToken();
            reject(errors.TOKEN_EXPIRE_TEXT);
          } else {
            reject(res.data.message);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * 删除用户
   * @param {Number} id
   */
  async deleteUser(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(url.DELETE_USER, {
          params: {
            id: id
          }
        })
        .then(res => {
          if (res.data.code === errors.SUCCESS) {
            resolve(res.data);
          } else if (res.data.code === errors.TOKEN_EXPIRE) {
            this.clearToken();
            reject(errors.TOKEN_EXPIRE_TEXT);
          } else {
            reject(res.data.message);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * 重置密码
   * @param {Number} id
   */
  async resetPassword(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(url.RESET_PASSWORD, {
          params: {
            id: id
          }
        })
        .then(res => {
          if (res.data.code === errors.SUCCESS) {
            resolve(res.data);
          } else if (res.data.code === errors.TOKEN_EXPIRE) {
            this.clearToken();
            reject(errors.TOKEN_EXPIRE_TEXT);
          } else {
            reject(res.data.message);
          }
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default Http;

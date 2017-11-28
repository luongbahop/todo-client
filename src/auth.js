let { services } = global.UTILS;
class Authentication {
  checkStorage() {
    let auth = JSON.parse(localStorage.getItem('authentication'));
    if (auth) {
      services.token = auth.token;
      return true;
    } else return false;
  }
};
export default new Authentication();
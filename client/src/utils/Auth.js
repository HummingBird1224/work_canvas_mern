/*
 ** Author: Santosh Kumar Dash
 ** Author URL: http://santoshdash.epizy.com/
 ** Github URL: https://github.com/quintuslabs/fashion-cube
 */

class Auth {
  constructor() {
    this.user_token = JSON.parse(localStorage.getItem("auth")) || {};
  }
  getToken() {
    return JSON.parse(localStorage.getItem("auth")) ?
      JSON.parse(localStorage.getItem("auth")).token : null;
  }
  getUserId() {
    return JSON.parse(localStorage.getItem("auth")) ?
      JSON.parse(localStorage.getItem("auth")).user_id : null;
  }

  getUserRole() {
    return JSON.parse(localStorage.getItem("auth")) ?
      JSON.parse(localStorage.getItem("auth")).role : null;
  }

  getUserEmail() {
    return JSON.parse(localStorage.getItem("auth")) ?
      JSON.parse(localStorage.getItem("auth")).email : null;
  }

  getCompanyId() {
    return JSON.parse(localStorage.getItem('auth')) ?
      JSON.parse(localStorage.getItem('auth')).company_id : null;
  }

  getCorporateName() {
    return JSON.parse(localStorage.getItem('auth')) ?
      JSON.parse(localStorage.getItem('auth')).corporate_name : null;
  }

  getUserDetails() {
    return JSON.parse(localStorage.getItem("auth")) ?
      JSON.parse(localStorage.getItem("auth")) : null;
  }

  setUserToken(new_token) {
    this.auth = new_token;
    localStorage.setItem("auth", JSON.stringify(new_token));
  }
  logout() {
    localStorage.removeItem("auth");
    // localStorage.removeItem("gifts");
  }
}
export default new Auth();

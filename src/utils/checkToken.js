export function checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  export function removeToken() {
    localStorage.removeItem('token');
  }  
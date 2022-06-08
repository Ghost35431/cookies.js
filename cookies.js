class cookie {
  function set(key, value=Null, exp=Null, path=Null) {
    if (exp == Null && path == Null) {
      document.cookie = key+"="+value;
    } else if (path == Null) {
      document.cookie = key+"="+value+";expires="+exp;
    } else if (exp == Null) {
      document.cookie = key+"="+value+";expires=;path=/"+path
    }
  }
  function remove(key) {
    document.cookie = key+"=;expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  }
  function del(key) {remove(key);console.info('deleted: '+key);}
  
  //based off of https://www.w3schools.com/js/js_cookies.asp
  function get(key) {
    let name = key + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
    }
}
export cookie;

/*v1.0.0.1_07.10.2022*/
const users = [
  {name: "user015",pass: 427764597159356,},
  {name: "user003",pass: 6688476758872486,},
  {name: "admin",pass: 6495187469915022,},
  ]
  const LOGIN_BUTTON = document.getElementById('login');
  const LOGIN_USER = document.getElementById('username');
  const LOGIN_PASS = document.getElementById('password');
  const hashCode = (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed,
      h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507) ^ Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507) ^ Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
  };
  const arr = [];
  users.forEach(function (item, i) {
    arr[i] = item.name + item.pass;
  });
  console.log(arr)
  const checkLogin = () => {
    if (!(arr.includes(((LOGIN_USER.value).toLowerCase() + hashCode(LOGIN_PASS.value))))) {
      return alert('Usuario o contraseña incorrecta')
    }
    for (const user of users) {
      if (((user.name).toLowerCase() == (LOGIN_USER.value).toLowerCase()) && (user.pass == hashCode(LOGIN_PASS.value)) ) {
        return window.location.href = './assets/index/index.html';
      }
    }
  }
  LOGIN_BUTTON.onclick = () => {
    console.log(hashCode(LOGIN_PASS.value))
    checkLogin();
  }
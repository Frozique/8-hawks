{function f() {
    alert( this ); // null
  }
  
  let user = {
    g: f.bind(null)
  };
  
  user.g();

  function f() {
    alert(this.name);
  }
  
  f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );
  
  f(); // Вася
}
// undefined

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
  }
  
  let user = {
    name: 'Вася',
  
    loginOk() {
      alert(`${this.name} logged in`);
    },
  
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
  
  };
  
  askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

  askPassword(() => user.login(true), () => user.login(false));

function verificarUsuario(usuario) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin") {
      resolve("Usuario válido ");
    } else {
      reject("Usuario inválido ");
    }
  });
}

verificarUsuario("admin") 
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); 

verificarUsuario("Ivan")
  .then((res) => console.log(res))
  .catch((err) => console.log(err)); 

  
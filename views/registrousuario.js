// capturo los elementos del formulario
const formElement = document.getElementById("formRegister");

//capturo el evento submit
formElement.addEventListener("submit", async (event) => {
  event.preventDefault();

  //capturo los campos del formulario de registro
  const cod_usuario = document.getElementById("cod_usuario").value;
  const nombre_usuario = document.getElementById("nombre_usuario").value;
  const apellido_usuario = document.getElementById("apellido_usuario").value;
  const documento_usuario = document.getElementById("documento_usuario").value;
  const cod_tipousuario = document.getElementById("cod_tipousuario").value;
  const correo_usuario = document.getElementById("correo_usuario").value;
  const celular = document.getElementById("celular").value;
  const clave = document.getElementById("clave").value;

  const registerusuario = {
    cod_usuario,
    nombre_usuario,
    apellido_usuario,
    documento_usuario,
    cod_tipousuario,
    correo_usuario,
    celular,
    clave,
  };

  try {
    const response = await axios.post(
      "http://localhost:3002/usuarios/registrousuario",registerusuario);

    Swal.fire({
      title: "Usuario registrado",
      html: `<strong>${nombre_usuario} ${apellido_usuario}</strong> fue creado correctamente`,
      icon: "success",
    }).then(() => {
      window.location.href = "./login";
    });
  } catch (error) {
    console.error("Error al registrar el usuario:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No se pudo registrar el usuario",
    });
  }
});

document.addEventListener("DOMContentLoaded", async () => {
  const tipoUsuarioSelect = document.getElementById("cod_tipousuario");

  try {
    const response = await axios.get("http://localhost:3002/tipousuarios");

    const tipos = response.data.data; // Proveedor desde tu API

    console.log(tipos);
    tipos.forEach((tu) => {
      const option = document.createElement("option");
      option.value = tu.cod_tipousuario;
      option.textContent = tu.nombre_tipousuario;
      tipoUsuarioSelect.appendChild(option);
    });
  } catch (error) {
    console.error("Error cargando tipos de usuario:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No se pudieron cargar los tipos de usuario.",
    });
  }
});

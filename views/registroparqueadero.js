const formElementparking = document.getElementById("formRegisterparking");

formElementparking.addEventListener("submit", async (event) => {
  event.preventDefault();


  const nombreparqueadero = document.getElementById("nombreparqueadero").value;
  const direccion = document.getElementById("direccion").value;
  const capacidad = Number(document.getElementById("capacidad").value);

  const registroparqueadero = {
    nombreparqueadero,
    direccion,
    capacidad,
  };

  try {
    const response = await axios.post(
      "http://localhost:3002/parqueadero",
      registroparqueadero
    );

    Swal.fire({
      title: "Parqueadero creado",
      html: `<strong>${nombre_parqueadero}</strong> registrado correctamente`,
      icon: "success",
    }).then(() => {
      window.location.href = "/menu";
    });
  } catch (error) {
    console.error("Error al registrar parqueadero:", error);

    Swal.fire({
      icon: "error",
      title: "Error",
      text: "No se pudo registrar el parqueadero",
    });
  }
});

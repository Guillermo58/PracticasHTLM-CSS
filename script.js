document.getElementById('registroForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const mensaje = document.getElementById('mensaje');

  const data = {
    nombre: e.target.nombre.value,
    correo: e.target.correo.value,
    telefono: e.target.telefono.value,
    categoria: e.target.categoria.value,
    edad: e.target.edad.value
  };

  try {
    const response = await fetch("https://webhook.site/b6f74f2b-d513-4e7c-9503-169d65dd708f", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      mensaje.textContent = "Datos enviados correctamente.";
      mensaje.style.color = "green";
      e.target.reset();
    } else {
      throw new Error("Error al enviar los datos");
    }
  } catch (error) {
    mensaje.textContent = "Ocurrió un error al enviar el formulario.";
    mensaje.style.color = "red";
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let nameInput = document.getElementById("name").value;
    let lastnameInput = document.getElementById("lastname").value;
    let dateInput = document.getElementById("date").value;

    // Se crea un objeto con cada value como elemento
    const values = {
      name: nameInput,
      lastname: lastnameInput,
      date: dateInput,
    };

    // Funcion fetch() que define el metodo, cambia el contenido de values a un JSON y envia los datos

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      body: JSON.stringify(values), // propiedad body pasa cadena JSON como input
      headers: {
        "Content-Type": "application/json; charset=UTF-8", // indica que el contenido enviado es JSON
      },
    })
      .then(function (response) { // Hace la solicitud
        if (!response.ok) {
          throw new Error("La solicitud no pudo completarse correctamente.");
        }
        return response.json();
      })

      .then(function (data) { // Muestra los datos en la consola
        console.log("Respuesta del servidor:", data);

      })
      .catch((error) => console.error("Error:", error));
  });
});

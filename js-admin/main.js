import { cargarUsuarios, crearTarea } from "./controllers/userController.js";
import { cargarTareas } from "./controllers/taskController.js";
import { validarUsuario } from "./controllers/userController.js";
import { crearUsuario } from "./controllers/userController.js";
import { mostrarAlerta } from "./utils/alerts.js";



document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnLogin");
  const input = document.getElementById("inputUsuarioV");

  if (btn && input) {
    btn.addEventListener("click", async () => {
      const nombre = input.value.trim();

      if (!nombre) {
        mostrarAlerta("ingrese un nombre", "danger" , "alertLogin");

        return;
      }

      const ok = await validarUsuario(nombre);

      if (ok) {
        
        mostrarAlerta("Acceso permitido", "success" , "alertLogin");
        // aquí se puede redirigir
        window.location.href = "dashboard.html";
      }
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {

  cargarUsuarios();

  cargarTareas();

  const btn = document.getElementById("liveToastBtn");
  const input = document.getElementById("data-entry");
  

  if (btn && input) {
    btn.addEventListener("click", async () => {
      const tarea = input.value.trim();

      if (tarea === "") {
        alert("Ingrese una tarea");
        return;
      }

      const resultado = await crearTarea(tarea);

      if (resultado) {
        console.log("Tarea guardada ");
        input.value = "";
        cargarTareas(); // refresca la tabla
      } else {
        console.log("Error al guardar ");
      }
    });
  }

});



document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("btnCrearUsuario");
  const input = document.getElementById("inputUsuario");

  if (btn && input) {
    btn.addEventListener("click", async () => {
      const nombre = input.value.trim();

      if (nombre === "") {
        mostrarAlerta("Credenciales incorrectas", "danger", "alertUsuarios");
        return;
      }

      const ok = await crearUsuario(nombre);

      if (ok) {
        mostrarAlerta("Usuario creado correctamente", "success", "alertUsuarios");
        input.value = "";
      } else {
        mostrarAlerta("Error al cargar", "danger");
      }
    });
  }
});

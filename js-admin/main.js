import { cargarUsuarios, crearTarea } from "./controllers/userController.js";
import { cargarTareas } from "./controllers/taskController.js";

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

import { getTareas } from "../models/taskModel.js";

export async function cargarTareas() {
  const tabla = document.getElementById("tablaTareas");

  if (!tabla) return;

  const tareas = await getTareas();
  tabla.innerHTML = "";

  tareas.forEach(t => {
    tabla.innerHTML += `
      <tr>
        <td>${t.id}</td>
        <td>${t.titulo}</td>
      </tr>
    `;
  });
}
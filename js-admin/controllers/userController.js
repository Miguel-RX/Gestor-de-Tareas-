import { getUsers } from '../models/userModel.js';
import { supabase } from "../config/supabase.js";



export const cargarUsuarios = async () => {
  const usuarios = await getUsers();
  const tabla = document.getElementById('tablaUsuarios');

    if (!tabla) return; // que no haga nada si la tabal no está :v
  
  tabla.innerHTML = '';
  usuarios.forEach(u => {
    tabla.innerHTML += `
    <tr>
        <td>${u.id}</td>
        <td>${u.user_name}</td>
    </tr>`;
  });
}

export async function crearTarea(titulo) {
  const { data, error } = await supabase
    .from("tareas")
    .insert([{ titulo }])
    .select();

  if (error) {
    console.error("Error:", error);
    return false;
  }

  return data;
}
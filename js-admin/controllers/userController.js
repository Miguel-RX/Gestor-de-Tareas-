import { getUsers } from '../models/userModel.js';
import { supabase } from "../config/supabase.js";
import { insertarUsuario } from "../models/userModel.js";
import { existeUsuario } from "../models/userModel.js";
import { mostrarAlerta } from "../utils/alerts.js";



//validar al usuario

export async function validarUsuario(nombre) {
  if (!nombre) return false;

  const existe = await existeUsuario(nombre);

  if (!existe) {
    mostrarAlerta("Usuario no existenete", "danger" , "alertLogin");
    return false;
  }

  return true; // puede ingresar
}


//crear al usuario 

export async function crearUsuario(nombre) {
  if (!nombre) return false;
  return await insertarUsuario(nombre);
}

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




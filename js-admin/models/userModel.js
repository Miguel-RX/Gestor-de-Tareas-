import { supabase } from "../config/supabase.js";

//Obtener usuarios
export const getUsers = async () => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*');

  if (error) throw error;
  return data;
};


//insertar usuarios 
export async function insertarUsuario(user_name) {
  const { error } = await supabase
    .from("usuarios")
    .insert([{ user_name }]);

  return !error; // true si todo salió bien
}

//Verificar si el usuario existe

export async function existeUsuario(user_name) {
  const { data, error } = await supabase
    .from("usuarios")
    .select("id")
    .eq("user_name", user_name)
    .maybeSingle();

  if (error) {
    console.error(error);
    return false;
  }

  return !!data; // true si existe, false si no
}
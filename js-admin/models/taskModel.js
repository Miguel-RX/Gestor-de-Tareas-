import { supabase } from "../config/supabase.js";

export async function getTareas() {
  const { data, error } = await supabase
    .from("tareas")
    .select("*")
    .order("id", { ascending: false });

  if (error) {
    console.error("Error al obtener tareas:", error);
    return [];
  }

  return data;
}
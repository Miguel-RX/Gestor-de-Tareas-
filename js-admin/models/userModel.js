import { supabase } from "../config/supabase.js";

export const getUsers = async () => {
  const { data, error } = await supabase
    .from('usuarios')
    .select('*');

  if (error) throw error;
  return data;
};
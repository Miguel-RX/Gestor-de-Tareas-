import { getUsers } from '../models/userModel.js';

export const cargarUsuarios = async () => {
  const usuarios = await getUsers();
  const tabla = document.getElementById('tablaUsuarios');

  tabla.innerHTML = '';
  usuarios.forEach(u => {
    tabla.innerHTML += `
    <tr>
        <td>${u.id}</td>
        <td>${u.user_name}</td>
    </tr>`;
  });
};
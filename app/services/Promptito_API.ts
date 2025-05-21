import type { UsuarioPost } from "~/interfaces";

const API_URL = "https://localhost:7035/";

export const getAllPrompts = async () => {
  const response = await fetch(
    `${API_URL}Prompt/prompt/paginacion?pagina=1&cantidadPorPagina=3`,
  );
  const data = await response.json();
  return data;
};

export const addFavourite = async (userId: number, promptId: number) => {
  console.log("userId", userId);
  console.log("promptId", promptId);
  const response = await fetch(
    `${API_URL}Usuario/addFavorite?usuarioId=${userId}&promptId=${promptId}`,
    {
      method: "POST",
      body: JSON.stringify({ userId, promptId }),
    },
  );
  return response.json();
};

export const getUserById = async (userId: number) => {
  const response = await fetch(`${API_URL}Usuario/dto/${userId}`);
  const data = await response.json();
  return data;
};

export const addUser = async (nuevoUsuario: UsuarioPost) => {
  const response = await fetch(`${API_URL}Usuario/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...nuevoUsuario }),
  });

  return response.json();
};

//TODO
export const getUserByIdClerk = async (idClerk: string) => {
  const response = await fetch(
    `${API_URL}Usuario/dto/getByIdClerk?idClerk=${idClerk}`,
  );
  const data = await response.json();

  if (data.title == "An error occurred") return null;

  return data;
};

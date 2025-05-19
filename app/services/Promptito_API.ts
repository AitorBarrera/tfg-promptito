const API_URL =
  "https://localhost:7035/";

export const getAllPrompts = async () => {
  const response = await fetch(`${API_URL}Prompt/prompt/paginacion?pagina=1&cantidadPorPagina=3`);
  const data = await response.json();
  return data;
};

export const addFavourite = async (userId: number, promptId: number) => {
  const response = await fetch(`${API_URL}Usuario/addFavorite?usuarioId=${userId}&promptId=${promptId}`, {
    method: "POST",
    body: JSON.stringify({ userId, promptId }),
  });
  return response.json();
};

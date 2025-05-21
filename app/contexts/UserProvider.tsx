import { useUser } from "@clerk/clerk-react";
import { UserContext } from "./UserContext";
import type { UsuarioPost } from "~/interfaces";
import { addUser } from "~/services/Promptito_API";
import { useEffect } from "react";

export const UserProvider = ({ children }) => {
  const { isLoaded, user } = useUser();

  const username = user?.username;
  const id = user?.id;
  const imageUrl = user?.imageUrl;
  const email = user?.emailAddresses?.[0]?.emailAddress;

  const nuevoUsuario: UsuarioPost = {
    nombre: username ?? "",
    email: email ?? "",
    passwordHash: "",
    avatarUrl: imageUrl ?? "",
    idClerk: id ?? "",
    estaActivo: true,
  };

  useEffect(() => {
    if (isLoaded == true)
      addUser(nuevoUsuario).then((response) => console.log(response));
  }, [isLoaded]);

  const usuarioActual = isLoaded ? nuevoUsuario : null;
  return (
    <>
      <UserContext.Provider value={{ usuarioActual }}>
        {children}
      </UserContext.Provider>
    </>
  );
};

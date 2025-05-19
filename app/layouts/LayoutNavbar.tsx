import { NavLink, Outlet } from "react-router-dom";
import { Icon } from "~/componentes/General/Icon";

export const LayoutNavbar = () => {
  return (
    <div className="">
      <div className="text-text border-bottom-2 max-w-standard relative mx-auto flex items-center justify-end gap-24 py-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary border-primary border-b-2 pb-2" : ""
          }
        >
          <Icon iconName={"house"} margin_right={10} /> Inicio
        </NavLink>

        <NavLink
          to="/explorar"
          className={({ isActive }) =>
            isActive ? "text-primary border-primary border-b-2 pb-2" : ""
          }
        >
          <Icon iconName={"search"} margin_right={10} /> Explorar
        </NavLink>

        <NavLink
          to="/crear"
          className={({ isActive }) =>
            isActive ? "text-primary border-primary border-b-2 pb-2" : ""
          }
        >
          <Icon iconName={"pencil"} margin_right={10} /> Crear
        </NavLink>

        <NavLink
          to="/informacion"
          className={({ isActive }) =>
            isActive ? "text-primary border-primary border-b-2 pb-2" : ""
          }
        >
          <Icon iconName={"info"} margin_right={10} /> Saber mas
        </NavLink>

        <NavLink
          to="/usuario"
          className={({ isActive }) =>
            isActive ? "text-primary border-primary border-b-2 pb-2" : ""
          }
        >
          <Icon iconName={"user"} margin_right={10} /> Usuario
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
};

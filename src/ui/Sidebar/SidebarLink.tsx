import { NavLink } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";

function SidebarLink({ name }: { name: string }) {
  return (
    <li>
      <NavLink
        to={name}
        key={name}
        className="flex gap-3 overflow-hidden rounded-md px-2 py-2 hover:text-white"
      >
        <SidebarIcon type={name} />
        <span>{name[0].toUpperCase() + name.slice(1)}</span>
      </NavLink>
    </li>
  );
}

export default SidebarLink;

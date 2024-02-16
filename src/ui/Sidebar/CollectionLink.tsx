import { NavLink } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";

type CollectionLinkProps = {
  collection: { name: string; id: string };
};

function CollectionLink({ collection }: CollectionLinkProps) {
  return (
    <li>
      <NavLink
        to={`collections/${collection.id}`}
        key={collection.id}
        className="flex gap-3 overflow-hidden rounded-md px-2 py-2 hover:text-white"
      >
        <SidebarIcon />
        <span>{collection.name}</span>
      </NavLink>
    </li>
  );
}

export default CollectionLink;

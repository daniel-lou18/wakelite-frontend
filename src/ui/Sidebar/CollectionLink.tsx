import { NavLink } from "react-router-dom";
import SidebarIcon from "./SidebarIcon";
import { CollectionData } from "../../hooks/useCollections";

type CollectionLinkProps = {
  collection: CollectionData;
};

function CollectionLink({ collection }: CollectionLinkProps) {
  return (
    <li>
      <NavLink
        to={`/collections/${collection._id}/cards`}
        key={collection._id}
        className="flex gap-3 overflow-hidden rounded-md px-2 py-2 hover:text-white"
      >
        <SidebarIcon />
        <span>{collection.name}</span>
      </NavLink>
    </li>
  );
}

export default CollectionLink;

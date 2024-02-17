import Logo from "./Logo";
import CollectionLink from "./CollectionLink";
import SidebarLink from "./SidebarLink";
import { CollectionData } from "../../hooks/useCollections";

export type SidebarProps = {
  collections: CollectionData[];
};

function Sidebar({ collections }: SidebarProps) {
  return (
    <aside className="h-full w-64 overflow-hidden px-4 py-4 text-blue-100">
      <Logo />
      <ul>
        <li className="mt-2">
          <ul className="flex flex-col gap-3">
            <SidebarLink name="home" />
            <SidebarLink name="bookmarks" />
          </ul>
        </li>
        <li className="mt-6">
          <h3 className="my-2 px-2 py-2 text-sm font-light">Collections</h3>
          <ul className="flex flex-col gap-3">
            {collections.map((collection) => (
              <CollectionLink collection={collection} key={collection._id} />
            ))}
          </ul>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

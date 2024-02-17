import { type CollectionData } from "../../hooks/useCollections";
import Collection from "./Collection";

function CollectionsList({ collections }: { collections: CollectionData[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {collections.length > 0 &&
        collections.map((collection) => (
          <Collection data={collection} key={collection._id} />
        ))}
    </div>
  );
}

export default CollectionsList;

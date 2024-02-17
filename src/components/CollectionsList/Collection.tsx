import { Link } from "react-router-dom";
import { type CollectionData } from "../../hooks/useCollections";

type CollectionProps = { data: CollectionData };

function Collection({ data }: CollectionProps) {
  if (!data || Object.keys(data).length === 0)
    return <p>No data to display...</p>;

  const { name, description, _id } = data;
  return (
    <Link to={`/collections/${_id}/cards`} className="hover:bg-white">
      <article className="flex h-36 max-w-sm flex-col justify-between gap-2 rounded-md border border-slate-200 bg-white px-3 py-3 shadow-lg transition delay-100 hover:cursor-pointer hover:shadow-xl hover:shadow-gray-300 hover:ring-2 dark:bg-slate-600 ">
        <h3 className="text-lg font-bold leading-normal text-slate-900 dark:text-white">
          {name}
        </h3>
        <p className="text-sm text-slate-600 dark:text-slate-100">
          {(description.length > 250
            ? description.slice(0, 250) + "..."
            : description) || "Link Description"}
        </p>
      </article>
    </Link>
  );
}

export default Collection;

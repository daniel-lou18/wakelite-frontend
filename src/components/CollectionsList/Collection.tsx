import { Link } from "react-router-dom";
import { type CollectionData } from "../../hooks/useCollections";

type CollectionProps = { data: CollectionData };

function Collection({ data }: CollectionProps) {
  if (!data || Object.keys(data).length === 0)
    return <p>No data to display...</p>;

  const { name, description, _id } = data;
  return (
    <Link to={`/collections/${_id}/cards`}>
      <article className="flex h-96 max-w-sm flex-col gap-2 rounded-md border border-slate-200 bg-white px-3 py-3 shadow-lg transition delay-100 ease-out hover:cursor-pointer hover:border-slate-50 hover:shadow-xl hover:shadow-gray-300 ">
        <h3 className="text-lg font-bold leading-normal text-slate-900">
          {name}
        </h3>
        <p className="text-sm text-slate-600">
          {(description.length > 250
            ? description.slice(0, 250) + "..."
            : description) || "Link Description"}
        </p>
      </article>
    </Link>
  );
}

export default Collection;

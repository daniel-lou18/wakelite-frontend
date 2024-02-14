import { type LinkData } from "../../App";

type CardProps = { data: LinkData };

function Card({ data }: CardProps) {
  if (!data || Object.keys(data).length === 0)
    return <p>No data to display...</p>;

  const { title, description, imageUrl } = data;
  return (
    <article className="flex h-96 max-w-sm flex-col gap-2 rounded-md border border-slate-200 bg-white px-3 py-3 shadow-lg transition delay-100 ease-out hover:cursor-pointer hover:border-slate-50 hover:shadow-xl hover:shadow-gray-300 ">
      <div className="flex-1 overflow-hidden">
        <img src={imageUrl} className="h-full w-full rounded-md object-cover" />
      </div>
      <div>
        <h3 className="text-lg font-bold leading-normal text-slate-900">
          {title || "Link Title"}
        </h3>
        <p className="text-sm text-slate-600">
          {description || "Link Description"}
        </p>
      </div>
    </article>
  );
}

export default Card;
import { type LinkData } from "../../App";

type CardProps = { data: LinkData };

function Card({ data }: CardProps) {
  if (!data || Object.keys(data).length === 0)
    return <p>No data to display...</p>;

  const { title, description, imageUrl } = data;
  return (
    <article>
      <img src={imageUrl} />
      <h3>{title || "Link Title"}</h3>
      <p>{description || "Link Description"}</p>
    </article>
  );
}

export default Card;

import { LinkData } from "../../hooks/useCards";
import Card from "./Card";

function CardsList({ cards }: { cards: LinkData[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {cards.length > 0 &&
        cards.map((link) => <Card data={link} key={link._id} />)}
    </div>
  );
}

export default CardsList;

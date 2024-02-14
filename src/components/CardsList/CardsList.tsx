import { type LinkData } from "../../pages/Home";
import Card from "./Card";

function CardsList({ cards }: { cards: LinkData[] }) {
  return (
    <div className="flex flex-col gap-4">
      {cards.length > 0 &&
        cards.map((link) => <Card data={link} key={link._id} />)}
    </div>
  );
}

export default CardsList;

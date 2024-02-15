import { useEffect, useState } from "react";
import { LinkData } from "../pages/Home";
import { getCards } from "../utils/apiCards";

function useCards() {
  const [cardsList, setCardsList] = useState<LinkData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadCards = async () => {
      try {
        setIsLoading(true);
        setError("");
        const payload = await getCards();
        // create utils function to convert createdAt property to new Date() for each card
        setCardsList(payload);
      } catch (err) {
        console.log((err as Error).message);
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    loadCards();
  }, [setCardsList, setIsLoading, setError]);

  return { cardsList, isLoading, error };
}

export { useCards };

import { useCallback, useEffect, useState } from "react";
import { LinkData } from "../pages/Home";
import { getCards } from "../services/apiCards";

function useCards() {
  const [cardsList, setCardsList] = useState<LinkData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

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

  const memoizedLoadCards = useCallback(loadCards, []);

  useEffect(() => {
    memoizedLoadCards();
  }, [setCardsList, setIsLoading, setError, memoizedLoadCards]);

  return { cardsList, isLoading, error, loadCards };
}

export { useCards };

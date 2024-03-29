import { useCallback, useEffect, useState } from "react";
import { getCards } from "../services/apiCards";

export type LinkData = {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  createdAt: Date;
  _id: string;
};

function useCards(collectionId: string) {
  const [cardsList, setCardsList] = useState<LinkData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const loadCards = async () => {
    try {
      setIsLoading(true);
      setError("");
      const payload = await getCards(collectionId);
      // create utils function to convert createdAt property to new Date() for each card
      setCardsList(payload);
    } catch (err) {
      console.log((err as Error).message);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const memoizedLoadCards = useCallback(loadCards, [collectionId]);

  useEffect(() => {
    memoizedLoadCards();
  }, [setCardsList, setIsLoading, setError, memoizedLoadCards]);

  return { cardsList, isLoading, error, loadCards };
}

export { useCards };

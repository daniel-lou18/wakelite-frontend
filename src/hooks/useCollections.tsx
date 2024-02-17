import { useCallback, useEffect, useState } from "react";
import { getAllCollections } from "../services/apiCollections";

export type CollectionData = {
  name: string;
  description: string;
  _id: string;
};

function useCollections() {
  const [collectionsList, setCollectionsList] = useState<CollectionData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const loadCollections = async () => {
    try {
      setIsLoading(true);
      setError("");
      const payload = await getAllCollections();
      // create utils function to convert createdAt property to new Date() for each card
      setCollectionsList(payload);
    } catch (err) {
      console.log((err as Error).message);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const memoizedLoadCollections = useCallback(loadCollections, []);

  useEffect(() => {
    memoizedLoadCollections();
  }, [setCollectionsList, setIsLoading, setError, memoizedLoadCollections]);

  return { collectionsList, isLoading, error, loadCollections };
}

export { useCollections };

import toast from "react-hot-toast";
import { useCollections } from "../hooks/useCollections";
import Spinner from "../ui/Spinner";
import { useEffect } from "react";
import CollectionsList from "../components/CollectionsList/CollectionsList";

function Collections() {
  const { collectionsList, isLoading, error } = useCollections();

  useEffect(() => {
    if (!isLoading && error) toast.error(error, { duration: 5000 });
  }, [isLoading, error]);

  return (
    <>
      {isLoading && <Spinner />}
      {!isLoading && !error && (
        <CollectionsList collections={collectionsList} />
      )}
    </>
  );
}

export default Collections;

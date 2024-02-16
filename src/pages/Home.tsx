import { useState, ChangeEvent, useEffect } from "react";
import Form from "../components/Form/Form";
import CardsList from "../components/CardsList/CardsList";
import { useCards } from "../hooks/useCards";
import Spinner from "../ui/Spinner";
import toast, { Toaster } from "react-hot-toast";
import { useCreateCard } from "../hooks/useCreateCard";

export type LinkData = {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  createdAt: Date;
  _id: string;
};

function Home() {
  const [linkUrl, setLinkUrl] = useState<string>("");
  const { cardsList, isLoading, error, loadCards } = useCards();
  const { handleSubmit, isLoading: isCreating } = useCreateCard(
    loadCards,
    setLinkUrl,
  );

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setLinkUrl(e.target.value);
  }

  useEffect(() => {
    if (!isLoading && error) toast.error(error, { duration: 5000 });
  }, [isLoading, error]);

  return (
    <>
      <Form
        onSubmit={(e) => handleSubmit(e, linkUrl)}
        onChange={handleInputChange}
        linkUrl={linkUrl}
      />
      {(isLoading || isCreating) && <Spinner />}
      {!(isLoading || isCreating) && !error && <CardsList cards={cardsList} />}
      <Toaster />
    </>
  );
}

export default Home;

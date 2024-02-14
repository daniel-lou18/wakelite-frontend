import { useState, FormEvent, ChangeEvent, useEffect } from "react";
import Form from "../components/Form/Form";
import CardsList from "../components/CardsList/CardsList";

const BASE_URL = "http://localhost:3000";

export type LinkData = {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  createdAt: Date;
  _id: string;
};

function App() {
  const [cardsList, setCardsList] = useState<LinkData[]>([]);
  const [linkUrl, setLinkUrl] = useState<string>("");

  const getCards = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/cards`);
      if (!res.ok) throw new Error("Could not get cards");
      const { payload } = await res.json();
      console.log(payload);
      // create utils function to convert createdAt property to new Date() for each card
      setCardsList(payload);
    } catch (err) {
      console.log((err as Error).message);
    }
  };

  useEffect(() => {
    getCards();
  }, [setCardsList]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const res = await fetch(`${BASE_URL}/api/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ linkUrl }),
      });
      if (!res.ok) throw new Error("Could not submit the link");
      // Add different error messages for different res.status
      const { payload } = await res.json();
      console.log(payload);
      await getCards();
    } catch (err) {
      console.error((err as Error).message);
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setLinkUrl(e.target.value);
  }

  return (
    <>
      <Form
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        linkUrl={linkUrl}
      />
      <CardsList cards={cardsList} />
    </>
  );
}

export default App;

import { useState, FormEvent, ChangeEvent } from "react";
import Form from "./components/Form/Form";
import Card from "./components/Card/Card";

const BASE_URL = "http://localhost:3000";

export type LinkData = {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
  _id: string;
};

function App() {
  const [linksList, setLinksList] = useState<LinkData[]>([]);
  const [linkUrl, setLinkUrl] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      const res = await fetch(`${BASE_URL}/api/link`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ linkUrl }),
      });
      if (!res.ok) throw new Error("Could not submit the link");
      const { payload } = await res.json();
      console.log(payload);
      setLinksList((prevList) => [...prevList, payload]);
    } catch (err) {
      console.error((err as Error).message);
    }
  }

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setLinkUrl(e.target.value);
  }

  return (
    <main>
      <Form
        onSubmit={handleSubmit}
        onChange={handleInputChange}
        linkUrl={linkUrl}
      />
      {linksList.length > 0 &&
        linksList.map((link) => <Card data={link} key={link._id} />)}
    </main>
  );
}

export default App;

const BASE_URL = "http://localhost:3000";

export const getCards = async () => {
  const res = await fetch(`${BASE_URL}/api/cards`);
  if (!res.ok) throw new Error("Could not get cards");
  const { payload } = await res.json();
  console.log(payload);
  // create utils function to convert createdAt property to new Date() for each card
  return payload;
};

export const createCard = async (linkUrl: string) => {
  const res = await fetch(`${BASE_URL}/api/cards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ linkUrl }),
  });
  if (!res.ok) {
    if (res.status === 404) throw new Error("Something went wrong");
    if (res.status === 400) throw new Error("Invalid url");
    if (res.status === 500) throw new Error("Network error");
    throw new Error("Could not submit the link");
  }
  const { payload } = await res.json();
  console.log(payload);
  return payload;
};

const BASE_URL = "http://localhost:3000";

export const getAllCollections = async () => {
  const res = await fetch(`${BASE_URL}/api/collections`);
  if (!res.ok) throw new Error("Could not get collections");
  const { payload } = await res.json();
  console.log(payload);
  // create utils function to convert createdAt property to new Date() for each card
  return payload;
};

export const getCollection = async (collectionId: string) => {
  const res = await fetch(`${BASE_URL}/api/collections/${collectionId}`);
  if (!res.ok) throw new Error("Could not get collections");
  const { payload } = await res.json();
  console.log(payload);
  // create utils function to convert createdAt property to new Date() for each card
  return payload;
};

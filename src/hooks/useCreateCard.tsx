import { FormEvent, useState } from "react";
import { createCard } from "../services/apiCards";
import toast from "react-hot-toast";

function useCreateCard(
  reloadFn: () => Promise<void>,
  setFn: (value: string) => void,
) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>, linkUrl: string) {
    try {
      e.preventDefault();
      setIsLoading(true);
      setError("");
      await createCard(linkUrl);
      toast.success("Card successfully created");
      setFn("");
      await reloadFn();
    } catch (err) {
      console.error((err as Error).message);
      toast.error((err as Error).message);
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }
  return { handleSubmit, isLoading, error };
}

export { useCreateCard };

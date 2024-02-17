import { ChangeEvent, FormEvent } from "react";
import Button from "../../ui/Button";

type FormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  linkUrl: string;
};

function Form({ onSubmit, onChange, linkUrl }: FormProps) {
  return (
    <form onSubmit={onSubmit} className="flex gap-3">
      <input
        type="url"
        onChange={onChange}
        value={linkUrl}
        required
        placeholder="Paste any web address"
        className="rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"
      ></input>
      <Button>Save link</Button>
    </form>
  );
}

export default Form;

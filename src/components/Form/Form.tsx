import { ChangeEvent, FormEvent } from "react";

type FormProps = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  linkUrl: string;
};

function Form({ onSubmit, onChange, linkUrl }: FormProps) {
  return (
    <form onSubmit={onSubmit}>
      <input type="url" onChange={onChange} value={linkUrl} required></input>
      <button>Get link</button>
    </form>
  );
}

export default Form;

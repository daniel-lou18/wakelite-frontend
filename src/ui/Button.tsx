import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className="rounded-full px-4 py-2 font-bold text-white focus:ring-2 "
    >
      {children}
    </button>
  );
}

export default Button;

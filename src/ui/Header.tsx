import { PropsWithChildren } from "react";

function Header({ children }: PropsWithChildren) {
  return <header className="w-full bg-sky-100">{children}</header>;
}

export default Header;

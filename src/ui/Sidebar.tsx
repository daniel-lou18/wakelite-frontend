import { PropsWithChildren } from "react";

function Sidebar({ children }: PropsWithChildren) {
  return <aside className="w-1/4 bg-sky-300">{children}</aside>;
}

export default Sidebar;

import { PropsWithChildren } from "react";

function Main({ children }: PropsWithChildren) {
  return (
    <main className="flex flex-col items-center justify-center gap-5 px-5 py-5">
      {children}
    </main>
  );
}

export default Main;

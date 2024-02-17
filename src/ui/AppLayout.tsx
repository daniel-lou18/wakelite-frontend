import { useEffect, useState } from "react";
import { useCollections } from "../hooks/useCollections";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function AppLayout() {
  const { collectionsList, isLoading, error } = useCollections();
  const [darkMode, setDarkMode] = useState<boolean>(false);
  console.log(darkMode);

  function handleDarkMode() {
    setDarkMode((value) => !value);
  }

  useEffect(() => {
    if (!isLoading && error) toast.error(error, { duration: 5000 });
  }, [isLoading, error]);

  return (
    <div className={`flex h-full ${darkMode ? "dark" : ""}`}>
      <Sidebar collections={collectionsList} />
      <div className="flex-1 overflow-auto dark:bg-slate-800">
        <Header darkMode={darkMode} onClickDarkMode={handleDarkMode} />
        <Main>
          <Outlet />
        </Main>
      </div>
      <Toaster />
    </div>
  );
}

export default AppLayout;

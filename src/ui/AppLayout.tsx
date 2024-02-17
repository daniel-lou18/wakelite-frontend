import { useEffect } from "react";
import { useCollections } from "../hooks/useCollections";
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import toast from "react-hot-toast";

function AppLayout() {
  const { collectionsList, isLoading, error } = useCollections();

  useEffect(() => {
    if (!isLoading && error) toast.error(error, { duration: 5000 });
  }, [isLoading, error]);

  return (
    <div className="flex h-full">
      <Sidebar collections={collectionsList} />
      <div className="flex-1 overflow-auto">
        <Header>
          <h1>TITLE</h1>
        </Header>
        <Main>
          <Outlet />
        </Main>
      </div>
    </div>
  );
}

export default AppLayout;

import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <>
      <Header>
        <h1>TITLE</h1>
      </Header>
      <div className="flex">
        <Sidebar>LINK</Sidebar>
        <Main>
          <Outlet />
        </Main>
      </div>
    </>
  );
}

export default AppLayout;

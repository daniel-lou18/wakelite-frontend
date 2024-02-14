import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Home from "../pages/Home";

function AppLayout() {
  return (
    <>
      <Header>
        <h1>TITLE</h1>
      </Header>
      <div className="flex">
        <Sidebar>LINK</Sidebar>
        <Main>
          <Home />
        </Main>
      </div>
    </>
  );
}

export default AppLayout;

import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const collections = [
  { name: "Veille technologique", id: "68588465qsdfqsd" },
  { name: "Éducation enfants", id: "qsd6f54qsdf" },
];

function AppLayout() {
  return (
    <div className="flex">
      <Sidebar collections={collections} />
      <div className="flex-1">
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

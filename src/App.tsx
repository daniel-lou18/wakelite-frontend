import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Collections from "./pages/Collections";
import Cards from "./pages/Cards";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<AppLayout />}>
      <Route path="/" element={<Collections />} />
      <Route path="home" element={<Collections />} />
      <Route path="collections/:collectionId/cards" element={<Cards />} />
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

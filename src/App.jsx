import "./css/style.css";
import Navbar from "./component/navbar";
import Home from "./component/home";
import Actors from "./component/actors";
import Films from "./component/films";
//import { BrowserRouter,Route } from 'react-router-dom';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div className="App">
              <Navbar title="OSCARS AWARDS" />
              <Outlet />
            </div>,
    children: [
      {
        path: "",
        element: <Home title="OSCAR AWARDS" />,
      },
      {
        path: "actors",
        element: <Actors />,
      },
      {
        path: "films",
        element: <Films />,
      },
    ]
  },
]);
// <Navbar title="Oscars 2023" />
function App() {
  return <RouterProvider router={router} />;
}
         export default App;

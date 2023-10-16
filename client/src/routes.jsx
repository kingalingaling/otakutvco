import { createBrowserRouter } from "react-router-dom";
import OtakuConnect from "./pages/OtakuConnect";

import Home from "./pages/Home";
import Abuja from "./pages/Abuja";
import Lagos from "./pages/Lagos";

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/otakuconnect", element: <OtakuConnect /> },
  { path: "/otakuconnect/abuja", element: <Abuja /> },
  { path: "/otakuconnect/lagos", element: <Lagos /> },

  // {path:'*', element: <PageNotFound />}
]);


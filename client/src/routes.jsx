import { createBrowserRouter } from "react-router-dom";
import OtakuConnect from "./pages/OtakuConnect";

import Home from "./pages/Home";
import Abuja from "./pages/Abuja";
import Lagos from "./pages/Lagos";
import OrderCompleted from "./pages/OrderCompleted";
import OrderFailed from "./pages/OrderFailed";

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/otakuconnect", element: <OtakuConnect /> },
  { path: "/otakuconnect/abuja", element: <Abuja /> },
  { path: "/otakuconnect/lagos", element: <Lagos /> },
  { path: "/otakuconnect/order-completed", element: <OrderCompleted /> },
  { path: "/otakuconnect/order-failed", element: <OrderFailed /> },

  // {path:'*', element: <PageNotFound />}
]);


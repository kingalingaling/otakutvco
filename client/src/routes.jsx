import { createBrowserRouter } from "react-router-dom";
import OtakuConnect from "./pages/OtakuConnect";

import Home from "./pages/Home";
import Abuja from "./pages/Abuja";
import Lagos from "./pages/Lagos";
import OrderCompleted from "./pages/OrderCompleted";
import OrderFailed from "./pages/OrderFailed";
import PageNotFound from "./pages/PageNotFound";
import Confirmation from "./pages/Confirmation";
import ContactForm from "./pages/ContactForm";

export const routes = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/contact-us", element: <ContactForm /> },
  { path: "/otakuconnect", element: <OtakuConnect /> },
  { path: "/otakuconnect/abuja", element: <Abuja /> },
  { path: "/otakuconnect/lagos", element: <Lagos /> },
  { path: "/otakuconnect/order-completed", element: <OrderCompleted /> },
  { path: "/otakuconnect/order-failed", element: <OrderFailed /> },
  { path: "/otakuconnect/confirmation", element: <Confirmation />},
  {path:'*', element: <PageNotFound />}
]);


import { Toaster } from "@/components/ui/sonner";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
  useLocation,
  useNavigate,
} from "@tanstack/react-router";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WhatsAppFloat from "./components/layout/WhatsAppFloat";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";

// Root layout
function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
      <Toaster />
    </>
  );
}

// Routes
const rootRoute = createRootRoute({ component: RootLayout });

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const listingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/listings",
  component: ListingsPage,
});

const routeTree = rootRoute.addChildren([homeRoute, listingsRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

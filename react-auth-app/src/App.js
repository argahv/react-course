import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useAuth } from "./context/auth-context";
import privateRoutes from "./routes/private-routes";
import routes from "./routes/public-routes";

// App component
function App() {
  const { isAuthenticated } = useAuth();

  // Combine and conditionally include routes based on authentication status
  console.log("isAuthenticated", isAuthenticated);
  const routeList = [
    // isAuthenticated ? privateRoutes() : {},
    isAuthenticated ? privateRoutes() : {},
    ...(!isAuthenticated ? routes() : []),
    // !isAuthenticated && routes(),
  ];
  console.log("routeList", routeList);
  const router = createBrowserRouter(routeList);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
}

export default App;

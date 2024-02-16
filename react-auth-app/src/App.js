import { createBrowserRouter, RouterProvider } from "react-router-dom";
import privateRoutes from "./routes/private-routes";
import routes from "./routes/public-routes";

// App component
function App() {
  // const { isAuthenticated } = useAuth(false);
  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    true ? privateRoutes() : {},
    ...routes(),
  ]);
  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
}

export default App;

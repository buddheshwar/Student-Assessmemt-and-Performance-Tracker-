import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Helper to check if it's a page reload (F5 or hard refresh)
const isPageReload = () => performance.getEntriesByType("navigation")[0]?.type === "reload";

const RedirectOnRefresh = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Protected routes you want to restrict on reload
  const protectedRoutes = ["/Dashboard", "/AdminNav"];

  useEffect(() => {
    const shouldRedirect = isPageReload() && protectedRoutes.includes(location.pathname);

    if (shouldRedirect) {
      navigate("/", { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
};

export default RedirectOnRefresh;

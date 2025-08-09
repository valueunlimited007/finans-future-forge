import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const OffersRerenderOnRoute = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Give React time to mount the new page DOM, then ask renderer to (re)render
    const t = setTimeout(() => {
      try {
        document.dispatchEvent(new CustomEvent("fg:offers-updated"));
      } catch {}
    }, 0);
    return () => clearTimeout(t);
  }, [pathname]);

  return null;
};

export default OffersRerenderOnRoute;

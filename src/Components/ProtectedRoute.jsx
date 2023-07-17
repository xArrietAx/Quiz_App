import { useEffect, useContext } from "react";
import { Context } from "../Context/Context";
import { useNavigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const Location = useLocation();

  const { Results } = useContext(Context);

  useEffect(() => {
    if (Location.pathname === "/Results" && Results === null) {
      return navigate("/");
    }
    if (!localStorage.Username) return navigate("/");
  }, [navigate, Location.pathname, Results]);

  return children;
};

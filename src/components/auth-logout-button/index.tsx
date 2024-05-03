/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

type AuthLogoutButtonProps = {
  onLogout: () => void;
};

const AuthLogoutButton: React.FC<AuthLogoutButtonProps> = ({ onLogout }) => {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    logout();
  };

  useEffect(() => {
    if (!isAuthenticated) {
      onLogout();
    }
  }, [isAuthenticated]);

  return (
    <div>
      <button
        className="px-4 py-2 shadow-sm bg-secondary hover:bg-hoverSecondary text-white dark:bg-primary dark:hover:bg-hoverPrimary cursor-pointer"
        disabled={!isAuthenticated}
        onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default AuthLogoutButton;
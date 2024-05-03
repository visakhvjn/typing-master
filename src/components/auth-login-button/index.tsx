/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

type AuthLoginButtonProps = {
  onLogin: () => void;
};

const AuthLoginButton: React.FC<AuthLoginButtonProps> = ({ onLogin }) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const handleLogin = () => {
    loginWithRedirect();
  };

  useEffect(() => {
    if (isAuthenticated) {
      onLogin();
    }
  }, [isAuthenticated]);

  return (
    <div>
      <button
        className="px-4 py-2 shadow-sm bg-secondary hover:bg-hoverSecondary text-white dark:bg-primary dark:hover:bg-hoverPrimary cursor-pointer"
        disabled={isAuthenticated}
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
};

export default AuthLoginButton;
import React from "react";
import { Link as RouterLink } from "react-router-dom";

interface HeaderProps {
  signedIn: boolean;
  onSignOut?: () => void;
}

export default function Header({ signedIn, onSignOut }: HeaderProps) {
  const onClick = () => {
    if (signedIn && onSignOut) {
      onSignOut();
    }
  };

  return (
    <React.Fragment>
      <header className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <RouterLink
              to="/"
              className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors duration-200"
            >
              App
            </RouterLink>
            <RouterLink
              to={signedIn ? "/" : "/auth/login"}
              onClick={onClick}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              {signedIn ? "Logout" : "Login"}
            </RouterLink>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}

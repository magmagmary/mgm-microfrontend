import { Link } from "react-router-dom";

const Copyright = () => {
  return (
    <p className="text-sm text-gray-500 text-center mt-4">
      {"Copyright © "}
      <Link to="/" className="text-indigo-600 hover:text-indigo-500">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </p>
  );
};

export default Copyright;

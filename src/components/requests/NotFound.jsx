import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-grow items-center justify-center bg-gray-50">
      <div className="rounded-lg bg-white p-8 text-center shadow-xl">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <div>
          <p className="text-gray-600">
            Oops! The page you are looking for could not be found.
          </p>
          <p className="text-gray-600">We're still working on it!</p>
        </div>
        <Link
          to={"/"}
          className="mt-4 inline-block rounded-lg bg-[var(--dark-accent)] px-4 py-3 font-medium text-white transition-colors hover:bg-[var(--dark-accent-hover)]"
        >
          {" "}
          Go back to Home{" "}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

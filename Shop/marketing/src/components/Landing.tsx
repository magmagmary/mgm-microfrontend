import React from "react";
import { Link } from "react-router-dom";
import Copyright from "./Copyright";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
              Home Page
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Something short and leading about the collection below—its
              contents, the creator, etc. Make it short and sweet, but not too
              short so folks don&apos;t simply skip over it entirely.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/pricing"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                >
                  Pricing
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/pricing"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Card Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <div
                key={card}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    className="w-full h-48 object-cover"
                    src="https://source.unsplash.com/random"
                    alt="Card image"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Heading
                  </h3>
                  <p className="text-gray-500">
                    This is a media card. You can use this section to describe
                    the content.
                  </p>
                </div>
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      View
                    </button>
                    <button className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Footer</h3>
            <p className="text-gray-500">
              Something here to give the footer a purpose!
            </p>
            <Copyright />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

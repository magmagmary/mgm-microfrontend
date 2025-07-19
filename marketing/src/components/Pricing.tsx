import React from "react";
import Copyright from "./Copyright";

const tiers = [
  {
    title: "Free",
    price: "0",
    description: [
      "10 users included",
      "2 GB of storage",
      "Help center access",
      "Email support",
    ],
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
  },
  {
    title: "Pro",
    subheader: "Most popular",
    price: "15",
    description: [
      "20 users included",
      "10 GB of storage",
      "Help center access",
      "Priority email support",
    ],
    buttonText: "Get started",
    buttonVariant: "contained",
  },
  {
    title: "Enterprise",
    price: "30",
    description: [
      "50 users included",
      "30 GB of storage",
      "Help center access",
      "Phone & email support",
    ],
    buttonText: "Contact us",
    buttonVariant: "outlined",
  },
];

const footers = [
  {
    title: "Company",
    description: ["Team", "History", "Contact us", "Locations"],
  },
  {
    title: "Features",
    description: [
      "Cool stuff",
      "Random feature",
      "Team feature",
      "Developer stuff",
      "Another one",
    ],
  },
  {
    title: "Resources",
    description: [
      "Resource",
      "Resource name",
      "Another resource",
      "Final resource",
    ],
  },
  {
    title: "Legal",
    description: ["Privacy policy", "Terms of use"],
  },
];

export default function Pricing() {
  return (
    <React.Fragment>
      {/* Hero unit */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl mb-4">
          Pricing
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Quickly build an effective pricing table for your potential customers
          with this layout. It&apos;s built with modern design principles and
          responsive components.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.title}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden ${
                tier.title === "Pro" ? "ring-2 ring-indigo-500" : ""
              }`}
            >
              {tier.title === "Pro" && (
                <div className="absolute top-0 left-0 right-0 bg-indigo-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {tier.title}
                  </h3>
                  {tier.subheader && (
                    <p className="text-sm text-indigo-600 font-medium mb-4">
                      {tier.subheader}
                    </p>
                  )}

                  <div className="flex items-baseline justify-center mb-8">
                    <span className="text-5xl font-extrabold text-gray-900">
                      ${tier.price}
                    </span>
                    <span className="text-xl text-gray-500 ml-1">/mo</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {tier.description.map((line) => (
                    <li key={line} className="flex items-center">
                      <svg
                        className="flex-shrink-0 h-5 w-5 text-green-500 mr-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-600">{line}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-md font-medium transition-colors ${
                    tier.buttonVariant === "contained"
                      ? "bg-indigo-600 text-white hover:bg-indigo-700"
                      : "border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50"
                  }`}
                >
                  {tier.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footers.map((footer) => (
              <div key={footer.title}>
                <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
                  {footer.title}
                </h3>
                <ul className="space-y-2">
                  {footer.description.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-gray-600 hover:text-gray-900 text-sm"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <Copyright />
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

import "./tailwind.css";
import React, { useState } from "react";

const Pricing = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } min-h-screen flex flex-col items-center bg-gray-100 dark:bg-black`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
        className="m-4 p-2 bg-blue-500 text-white dark:bg-blue-700 rounded"
      >
        Toggle {darkMode ? "Light" : "Dark"} Mode
      </button>

      {/* Pricing Section */}
      <section className="w-full max-w-5xl p-6 text-center dark:bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          API Pricing
        </h2>
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          Our API pricing is based on the model used and the number of tokens
          processed. Here's a breakdown of the costs:
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <thead>
              <tr>
                <th className="py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  API
                </th>
                <th className="py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  Model
                </th>
                <th className="py-3 px-6 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
                  Price per 1K tokens
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  OpenAI
                </td>
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  GPT-3.5
                </td>
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  $0.002
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  OpenAI
                </td>
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  GPT-4
                </td>
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  $0.03
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  Together AI
                </td>
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  Llama-2-70b
                </td>
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  $0.0008
                </td>
              </tr>
              <tr className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  Together AI
                </td>
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  Llama-2-13b
                </td>
                <td className="py-4 px-6 text-gray-800 dark:text-gray-300">
                  $0.0006
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-left text-gray-700 dark:text-gray-300">
          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Token Estimation
          </h3>
          <p className="mb-4">
            On average, 1 token is approximately 4 characters or 0.75 words. For
            precise pricing, we recommend using our token calculator tool.
          </p>

          <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
            Billing
          </h3>
          <p>
            You will only be charged for the tokens used in generating the book.
            The API tracks token usage and bills accordingly. Detailed usage
            reports are available in your account dashboard.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;

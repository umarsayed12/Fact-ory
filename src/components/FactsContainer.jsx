import { useState } from "react";

const FactsContainer = () => {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random"; // The Public API for Random Facts (If it would be private api, i would keep API key in .env file).
  const getFact = async () => {
    // The Fucntion to fetch the API and get Fact data.
    setLoading(true); // Loading button until the fact is fetched.
    const response = await fetch(apiUrl);
    const data = await response?.json();
    if (data) setFact(data.text || "No fact Generated");
    setLoading(false);
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {/* Conditional Rendering */}
      {fact && <div className="text-3xl font-semibold font-mono">Fact-ory</div>}

      {/* Conditional Rendering (if Fact is not generated, it will not show this
      container) */}
      {fact ? (
        <div className="bg-yellow-400 w-[80%] md:w-[600px] h-[400px] flex justify-center items-center rounded-xl shadow-xl">
          <div className="p-4 wrap w-[90%] italic text-center">{fact}</div>
        </div>
      ) : (
        <>
          {/* If fact is not present, it will show Welcome message. */}
          <h1 className="text-2xl font-semibold">Welcome to Fact-ory</h1>
          <p>Get Random Facts on one click</p>
        </>
      )}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={getFact}
          className="bg-violet-500 text-white p-2 rounded-lg hover:bg-violet-600 cursor-pointer shadow-md shadow-black"
        >
          {/* Conditional Rendering (Show "Loading..." until the fact is generated and if one fact is generated, show "Generate More") */}
          {loading ? "Loading..." : fact ? "Generate More" : "Generate Fact"}
        </button>
        {/* Conditional Rendering (If there is no fact, do not show reset button) */}
        {fact && (
          <button
            onClick={() => setFact(null)}
            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 cursor-pointer shadow-md shadow-black"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
};

export default FactsContainer;

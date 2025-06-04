import React, { useEffect, useState } from "react";

const FactsContainer = () => {
  const [fact, setFact] = useState(null);
  const [loading, setLoading] = useState(false);
  const apiUrl = "https://uselessfacts.jsph.pl/api/v2/facts/random";
  const getFact = async () => {
    setLoading(true);
    const response = await fetch(apiUrl);
    const data = await response?.json();
    if (data) setFact(data.text);
    setLoading(false);
  };
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      {fact && <div className="text-3xl font-semibold font-mono">Fact-ory</div>}
      {fact ? (
        <div className="bg-yellow-400 w-[80%] md:w-[600px] h-[400px] flex justify-center items-center rounded-xl shadow-xl">
          <div className="p-4 wrap w-[90%] italic text-center">{fact}</div>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-semibold">Welcome to Fact-ory</h1>
          <p>Get Random Facts on one click</p>
        </>
      )}
      <div className="flex justify-center items-center gap-4">
        <button
          onClick={getFact}
          className="bg-violet-500 text-white p-2 rounded-lg hover:bg-violet-600 cursor-pointer shadow-md shadow-black"
        >
          {loading ? "Loading..." : fact ? "Generate More" : "Generate Fact"}
        </button>
        {fact && (
          <button
            onClick={() => setFact(null)}
            className="bg-red-600 text-white p-2 rounded-lg hover:bg-red-700 cursor-pointer shadow-md shadow-black"
          >
            {loading ? "Loading..." : "Reset"}
          </button>
        )}
      </div>
    </div>
  );
};

export default FactsContainer;

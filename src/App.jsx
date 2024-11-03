import React, { useState } from "react";

function App() {
  const [allKnowledge, setAllKnowledge] = useState(false);
  const [brain, setBrain] = useState(false);
  const [intelligence, setIntelligence] = useState(false);

  const handleAllKnowledgeToggle = () => {
    setAllKnowledge((prev) => !prev);
    if (!allKnowledge) {
      setBrain(false);
      setIntelligence(false);
    }
  };

  const handleBrainToggle = () => {
    setBrain((prev) => !prev);
    if (!brain) {
      setAllKnowledge(false);
    }
  };

  const handleIntelligenceToggle = () => {
    setIntelligence((prev) => !prev);
    if (!intelligence) {
      setAllKnowledge(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-4">
      <div className="space-y-8 w-full max-w-sm md:max-w-md lg:max-w-lg">
        {/* All Knowledge Toggle */}
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold text-white mb-2">
            Barca fan
          </span>
          <div
            className={`w-24 h-12 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
              allKnowledge ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={handleAllKnowledgeToggle}
          >
            <div
              className={`bg-white w-10 h-10 rounded-full shadow-md transform duration-300 ${
                allKnowledge ? "translate-x-12" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        {/* Brain Toggle */}
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold text-white mb-2">Miya</span>
          <div
            className={`w-24 h-12 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
              brain ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={handleBrainToggle}
          >
            <div
              className={`bg-white w-10 h-10 rounded-full shadow-md transform duration-300 ${
                brain ? "translate-x-12" : "translate-x-0"
              }`}
            />
          </div>
        </div>

        {/* Intelligence Toggle */}
        <div className="flex flex-col items-center">
          <span className="text-lg font-semibold text-white mb-2">Aql</span>
          <div
            className={`w-24 h-12 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${
              intelligence ? "bg-green-500" : "bg-gray-300"
            }`}
            onClick={handleIntelligenceToggle}
          >
            <div
              className={`bg-white w-10 h-10 rounded-full shadow-md transform duration-300 ${
                intelligence ? "translate-x-12" : "translate-x-0"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

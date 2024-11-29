import React, { useState } from "react";

export function OxyCutting() {
  // État pour contrôler l'affichage du texte
  const [showText, setShowText] = useState(false);

  // Fonction pour gérer le clic
  const handleClick = () => {
    setShowText(!showText);
  };

  return (
    <div className="text-center p-4">
      {/* H1 cliquable */}
      <h1
        className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold cursor-pointer flex items-center justify-center text-blue-400"  
        onClick={handleClick}
      >
       OXYCOUPAGE
      </h1>
        {/* Icône qui change en fonction de l'état */}
        <div className="flex justify-center mt-2">
        <span className="transition-transform transform"
        onClick={handleClick}
        >
          {showText ? (
            <svg xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-6 h-6 text-blue-500 rotate-180">
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
            
          ) : (
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth="1.5" 
                stroke="currentColor" 
                className="w-6 h-6 text-blue-500 rotate-180">
            <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          

          )}
        </span>
        </div>
      

      {/* Affiche ou cache le texte en fonction de l'état */}
      {showText && (
     
        <p className="mt-4 text-lg">
          <img src="laserCutting.jpg" alt="découpe laser" />
          Notre atelier dispose aussi d’un banc d’oxycoupage. 
            Ainsi nous pouvons répondre à toutes vos demandes et besoins dans pour type de découpes.
        </p>
      )}
    </div>
  );
}

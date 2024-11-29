import React, { useState } from "react";

export function LaserCutting() {
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
        DECOUPE LASER
        {/* Icône qui change en fonction de l'état */}
        <span className="transition-transform transform">
          {showText ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500 rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          )}
        </span>
      </h1>

      {/* Affiche ou cache le texte en fonction de l'état */}
      {showText && (
     
        <p className="mt-4 text-lg">
          <img src="laserCutting.jpg" alt="découpe laser" />
          Véritables spécialistes de la découpe laser à Lyon, 
          nous vous proposons nos services pour tous vos projets. 
          Nous vous assurons un travail de qualité dans les plus brefs délais.
        </p>
      )}
    </div>
  );
}

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
          <span className="transition-transform transform "
          onClick={handleClick}
          >
            {showText ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25" />
            </svg>
            
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 4.5h14.25M3 9h9.75M3 13.5h5.25m5.25-.75L17.25 9m0 0L21 12.75M17.25 9v12" />
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

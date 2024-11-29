import React from "react";

export function HomePage() {
  return (
    <div>
      <h1 className="bg-slate-500 m-4 shadow text-white text-3xl font-bold">
        <span className="text-6xl font-extrabold text-blue-400">A</span>telier{" "}
        <span className="text-6xl font-extrabold text-blue-400">T</span>echnique{" "}
        <span className="text-6xl font-extrabold text-blue-400">O</span>xycoupage{" "}
        <span className="text-6xl font-extrabold text-blue-400">L</span>aser{" "}
        <span className="text-6xl font-extrabold text-blue-400">L</span>yonnais
      </h1>

      <p className="text-xl font-bold m-4">
            
        Spécialistes de la découpe laser, pliage et oxycoupage à Lyon
        qualité, précision et rapidité au service de vos projets métallurgiques.
      </p>
      <video 
        src="decoupe-vid2.mp4" 
        controls 
        autoPlay 
        muted
        loop 
        width="100%" 
        height="auto">
        Votre navigateur ne supporte pas la lecture de vidéo.
      </video>
    </div>
  );
}

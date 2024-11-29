import React from "react";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
    <h1 className="text-white text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
      <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-blue-400">A</span>telier{" "}
      <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-blue-400">T</span>echnique{" "}
      <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-blue-400">O</span>xycoupage{" "}
      <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-blue-400">L</span>aser{" "}
      <span className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold text-blue-400">L</span>yonnais
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
        className="max-w-[1024px]  mx-auto" 
        height="auto">
        Votre navigateur ne supporte pas la lecture de vidéo.
      </video>

     <h3 className="p-2 m-5 border border-gray-300 rounded-lg text-2xl"> NOS SERVICES</h3>
      <div className="flex justify-evenly p-4 ">
        <Link to="services" className="flex flex-col p-4 m-2 border border-gray-300 rounded-lg">
          <h4 className="text-xl font-semibold">Découpe laser</h4>
          <img src="laserCutting.jpg" alt="Laser Cutting" className="mt-2" />
        </Link>
        <Link to="services" className="flex flex-col p-4 m-2 border border-gray-300 rounded-lg">
          <h4 className="text-xl font-semibold">Pliage</h4>
          <img src="laserCutting.jpg" alt="Pliage" className="mt-2" />
        </Link>
        <Link to="services" className="flex flex-col p-4 m-2 border border-gray-300 rounded-lg">
          <h4 className="text-xl font-semibold">Oxycoupage</h4>
          <img src="laserCutting.jpg" alt="Oxycoupage" className="mt-2" />
        </Link>
      </div>



      
    </div>
  );
}


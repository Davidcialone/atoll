import React from 'react';
import {LaserCutting} from './services/laserCutting';
import {OxyCutting} from './services/oxyCutting';
import {Folding} from './services/folding';

export function Services() {
  return (
  <div>
      <h1 
      className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold cursor-pointer flex items-center justify-center text-blue-400" >
      NOS SERVICES
     </h1>
      <LaserCutting/>
      <Folding/>
      <OxyCutting/>
  </div>
  );
}

export default Services;

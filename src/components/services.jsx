import React from 'react';
import {LaserCutting} from './services/laserCutting';
import {OxyCutting} from './services/oxyCutting';
import {Folding} from './services/folding';

export function Services() {
  return <div>
    <h1>Nos Services</h1>
  <LaserCutting/>
  <Folding/>
  <OxyCutting/>
  </div>
}

export default Services;

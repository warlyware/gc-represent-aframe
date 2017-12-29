import 'aframe';
import 'aframe-geojson-component';
import 'aframe-particle-system-component';
import * as GeoJSONData from './assets/data.geojson';
import { Entity, Scene } from 'aframe-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

console.log(GeoData);
class App extends Component {
  render() {
    return (
      <Scene>
        <a-assets>
          <a-asset-item id="json-lakes-50m" src={GeoJSONData} />
        </a-assets>
        <Entity
         camera={{
           active: true,
           position:{
            x: 0, y: 0, z: 0
           }
          }}
        />
        <Entity
          rotate='-1'
          scale='2 2 2'
          geojson={{
            src: '#json-lakes-50m',
            featureKey: 'name',
            pointScale: 0.0000001,
            pointAs: 'bar',
            pointSizeFeature: 'pop_min',
            lineWidth: 4,
            pointScaling: 'linear'
          }}
          geometry={{
            primitive: 'sphere',
            radius: 1
          }}
          material={{
            color: 'red'
          }}
          position={{
            x: 0, y: 0, z: -5}}/>
      </Scene>
    );
  }
}

export default App;

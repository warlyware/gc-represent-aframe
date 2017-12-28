import 'aframe';
import 'aframe-particle-system-component';
import {Entity, Scene} from 'aframe-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Scene>
        <Entity>
          <a-entity camera="active: true; userHeight: 1.6" position="0 0 0"></a-entity>
        </Entity>
        <Entity geometry={{primitive: 'box', width: 5}} position="0 0 -5"/>
      </Scene>
    );
  }
}

export default App;

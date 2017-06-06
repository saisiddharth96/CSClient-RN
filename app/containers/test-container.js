'use strict';

import React, { Component } from 'react';
import { View, Image, Text, Dimensions } from 'react-native';
import {
  forceSimulation,
  forceCollide,
  forceManyBody,
  forceCenter,
  forceX,
  forceY,
} from 'd3-force';

const data = [
  { number: 1, name: 'Fun activities' },
  { number: 2, name: 'Dog' },
  { number: 3, name: 'Food' },
  { number: 4, name: 'Car' },
  { number: 5, name: 'Rent' },
  { number: 6, name: 'Misc' },
];

class TestContainer extends Component {
  getRandomGroupCoordinator = (screenWidth, screenHeight) => {
    const rangeX = [0, screenWidth];
    const rangeY = [0, screenHeight];
  };

  render() {
    const simulation = forceSimulation(data)
      .force('collide', forceCollide(d => d.r))
      .force('charge', forceManyBody())
      .force('center', forceCenter(400 / 2, 400 / 2))
      .force('y', forceY(0))
      .force('x', forceX(0));

    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height;

    simulation.nodes(data).on('tick', this.ticked);

    console.log(simulation);

    return (
      <View style={{ paddingTop: 32 }}>
        <Text>asdsad</Text>
        <Image
          style={{ width: 40, height: 40 }}
          source={{ uri: 'https://cbox.im/i/EdPj3.jpg' }}
        />
      </View>
    );
  }
}

export default TestContainer;

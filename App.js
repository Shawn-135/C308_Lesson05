/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
        Text, ScrollView
} from 'react-native';

import {MovieList} from './Movie.js';
import {ProductList} from './Boats.js';


const App: () => React$Node = () => {
  return (
      <ScrollView>
         <Text>Lesson 05 Exercises</Text>
          <MovieList />
          <ProductList/>
     </ScrollView>
  );
};


export default App;

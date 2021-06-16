import React from 'react';
import { StyleSheet, View } from 'react-native';

import ContentView from './ContentView';

export default function App() {
  return (
    <View style={styles.container}>
      <ContentView />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
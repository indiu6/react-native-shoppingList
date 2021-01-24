import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}}
        style={styles.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    // alignContent: 'center',
    // alignItems: 'center',
  },
});

export default App;

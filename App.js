import React, {useState} from 'react';
import {View, StyleSheet, Image, FlatList, Text} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import ListItem from './components/ListItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Banana'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Apple'},
  ]);

  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}}
        style={styles.img}
      />
      <FlatList
        data={items}
        renderItem={({item}) => <ListItem item={item} />}
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

import React, {useState} from 'react';
import {View, StyleSheet, Image, FlatList} from 'react-native';
import Header from './components/Header';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuidv4(), text: 'Milk'},
    {id: uuidv4(), text: 'Banana'},
    {id: uuidv4(), text: 'Bread'},
    {id: uuidv4(), text: 'Apple'},
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const addItem = (text) => {
    setItems((prevItems) => [{id: uuidv4(), text}, ...prevItems]);
  };

  return (
    <View style={styles.container}>
      <Header title={'Shopping List'} />
      <Image
        source={{uri: 'https://randomuser.me/api/portraits/men/3.jpg'}}
        style={styles.img}
      />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
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

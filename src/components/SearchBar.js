import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" style={styles.iconStyle} />
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: '#f0eeee',
    height: 40,
    borderRadius: 10,
    margin: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 16,
  },
  iconStyle: {
    fontSize: 25,
    alignSelf: 'center',
    marginHorizontal: 10,
  }
});

export default SearchBar;

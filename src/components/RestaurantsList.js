import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import RestaurantsDetail from './RestaurantsDetail';

const RestaurantsList = ({ title, restaurants }) => {
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurants) => restaurants.id}
        renderItem={({ item }) => {
          return <RestaurantsDetail
            results={item}
          />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    marginBottom: 10,
  },
  titleStyle: {
    marginHorizontal: 15,
    marginBottom: 5,
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default RestaurantsList;

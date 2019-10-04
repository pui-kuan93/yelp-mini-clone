import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import RestaurantsDetail from './RestaurantsDetail';

const RestaurantsList = ({ title, restaurants, navigation }) => {
  if (!restaurants.length) {
    return null;
  }
  return (
    <View style={styles.containerStyle}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={restaurants}
        keyExtractor={(restaurants) => restaurants.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('RestaurantsShow', { id: item.id })}
            >
              <RestaurantsDetail results={item} />
            </TouchableOpacity>
          );
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

export default withNavigation(RestaurantsList);

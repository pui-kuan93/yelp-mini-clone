import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';
import RestaurantsList from '../components/RestaurantsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, error] = useRestaurants();

  const filterRestaurantsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return restaurants.filter(restaurants => {
      return restaurants.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <ScrollView>
        <RestaurantsList
          title="Cost Effective"
          restaurants={filterRestaurantsByPrice('$')}
        />
        <RestaurantsList
          title="Bit Pricier"
          restaurants={filterRestaurantsByPrice('$$')}
        />
        <RestaurantsList
          title="Big Spender"
          restaurants={filterRestaurantsByPrice('$$$')}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
});

export default SearchScreen;

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useRestaurants from '../hooks/useRestaurants';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, restaurants, error] = useRestaurants();

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {error ? <Text>{error}</Text> : null}
      <Text>We have found {restaurants.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;

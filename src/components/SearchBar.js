/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {backDropColor, subtextColor} from '../Constants';

const SearchBar = (props) => {
  const [query, setQuery] = useState('');

  return (
    <View style={styles.sectionStyle}>
      <Icon
        name="search"
        style={styles.icon}
        size={30}
        color={'rgba(255, 255, 255, 0.54)'}
        onPress={() => props.onSearch(query)}
      />
      <TextInput
        placeholder={props.title}
        value={query}
        onChangeText={(value) => setQuery(value)}
        onSubmitEditing={() => props.onSearch(query)}
        placeholderTextColor="rgba(255, 255, 255, 0.54)"
        style={{flex: 1, fontSize: 16, paddingLeft: 17, color: subtextColor}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    paddingLeft: 19,
    paddingTop: 9,
    paddingBottom: 9,
  },
  sectionStyle: {
    flexDirection: 'row',
    backgroundColor: backDropColor,
    borderRadius: 100,
    width: '85%',
    height: 46,
  },
});

export default SearchBar;

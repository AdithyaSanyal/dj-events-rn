import React, {useState, useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {StyleSheet, View, FlatList} from 'react-native';
import EventCard from '../../components/EventCard';
import {bgColor, textColor} from '../../Constants';
import axios from '../../controllers/axios';

const Upcoming = ({d}) => {
  const [data, setData] = useState([]);
  // const [check, setCheck] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUpcoming = async () => {
    let res = await axios.get('/events');
    setData(res.data);
    setLoading(false);
  };

  useEffect(() => {
    getUpcoming();
  }, []);

  return loading ? (
    <ActivityIndicator
      style={styles.container}
      color={textColor}
      size={'large'}
    />
  ) : (
    <View style={{backgroundColor: bgColor, paddingBottom: 10}}>
      <FlatList
        keyExtractor={(event, index) => index.toString()}
        data={d}
        renderItem={({item}) => {
          return (
            <View style={styles.container}>
              <EventCard
                name={item.eventName}
                id={item.id}
                summary={item.eventSummary}
                likes={item.likes}
                committee={item.organisingCommitteeName}
                description={item.eventDescription}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: bgColor,
    paddingLeft: 23,
    paddingTop: 17,
  },
});

export default Upcoming;

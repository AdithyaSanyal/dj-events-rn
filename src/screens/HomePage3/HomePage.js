/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Header} from 'react-native-elements';
import Entypo from 'react-native-vector-icons/Entypo';
import SearchBar from '../../components/SearchBar';
import MyTopTabs from '../../components/TopTabBarNav';
import {
  backDropColor,
  bgColor,
  statusbarColor,
  subtextColor,
} from '../../Constants';
import {AuthContext} from '../../Authentication/AuthProvider';

const image = require('../../images/profile.jpg');

export function HomePage() {
  const {currentUser} = useContext(AuthContext);

  const getStatus = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      'Authorization',
      'Token 5029bb69eb71700190df6ac516718695394a4ed0',
    );
    myHeaders.append('Content-Type', 'application/json');

    var raw = '';

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };

    fetch(
      'http://aryan123456.pythonanywhere.com/api/event_like_check/1/2/',
      requestOptions,
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  };

  return (
    <SafeAreaProvider>
      <Header
        containerStyle={{height: 3, backgroundColor: bgColor}}
        statusBarProps={{backgroundColor: statusbarColor}}
      />
      <View style={styles.container}>
        <View style={styles.upperRow}>
          <Text style={styles.title}>Hi, {currentUser.Name}</Text>
          <TouchableOpacity style={styles.profileImgContainer}>
            <Image source={image} style={styles.profileImg} />
          </TouchableOpacity>
        </View>
        <Text style={styles.subtitle}>{currentUser.Username}</Text>
        <View style={styles.icon}>
          <SearchBar title={'Search for an event'} />
          <View style={{width: 8}} />
          <TouchableOpacity style={styles.sort} onPress={() => getStatus()}>
            <Entypo name="sound-mix" size={25} color={'#dadada'} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 25, backgroundColor: bgColor}} />
      <MyTopTabs />
    </SafeAreaProvider>
  );
}

/*const BottomTab = createMaterialBottomTabNavigator();

export default class MyBottomTabs extends React.Component {
  render() {
    return (
      <BottomTab.Navigator
        labeled={true}
        shifting={true}
        tabBarOptions={{
          style: {height: 50},
        }}>
        <BottomTab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarColor: statusbarColor,
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'home' : 'home-outline'}
                color={textColor}
                size={26}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            tabBarColor: statusbarColor,
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'md-search-sharp' : 'md-search-outline'}
                color={textColor}
                size={27}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Committee"
          component={Committee}
          options={{
            tabBarColor: statusbarColor,
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'people' : 'people-outline'}
                color={textColor}
                size={26}
              />
            ),
          }}
        />
        <BottomTab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarColor: statusbarColor,
            tabBarIcon: ({focused}) => (
              <Icon
                name={focused ? 'person' : 'person-outline'}
                color={textColor}
                size={26}
              />
            ),
          }}
        />
      </BottomTab.Navigator>
    );
  }
}*/

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: bgColor,
    paddingLeft: 27,
    paddingRight: 26,
  },
  upperRow: {
    flexDirection: 'row',
    alignContent: 'space-around',
  },
  title: {
    fontFamily: 'OpenSans-Regular',
    paddingTop: 27,
    color: subtextColor,
    fontSize: 25,
  },
  profileImgContainer: {
    marginLeft: 8,
    height: 42,
    width: 42,
    borderRadius: 40,
    paddingRight: 20,
    paddingLeft: 110,
    paddingTop: 20,
  },
  profileImg: {
    height: 62,
    width: 62,
    borderRadius: 40,
  },
  subtitle: {
    color: 'rgba(255,255,255,0.75)',
    paddingTop: 10,
  },
  sort: {
    backgroundColor: backDropColor,
    borderRadius: 100,
    width: 60,
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    paddingTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

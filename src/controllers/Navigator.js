/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import EventsScreen from '../screens/HomePage3/EventsScreen';
import {NavigationContainer} from '@react-navigation/native';
import {AuthContext} from '../Authentication/AuthProvider';
import {bgColor, textColor} from '../Constants';
import MainTabScreen from '../Navigation/MainTabScreen';
import RootStackScreen from '../Navigation/RootStackScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  const {currentUser, isLoading} = useContext(AuthContext);

  if (isLoading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: bgColor,
        }}>
        <ActivityIndicator size="large" color={textColor} />
      </View>
    );
  }
  return (
    <NavigationContainer>
      {currentUser != null ? (
        <Stack.Navigator headerMode="none" initialRouteName="MainTab">
          <Stack.Screen component={MainTabScreen} name="MainTab" />
          <Stack.Screen component={EventsScreen} name="EventPage" />
        </Stack.Navigator>
      ) : (
        <RootStackScreen />
      )}
    </NavigationContainer>
  );
};

/*return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Upcoming" component={Upcoming} />
          <Stack.Screen name="Latest" component={Latest} />
          <Stack.Screen name="Committees you follow" component={Following} />
          <Stack.Screen name="Events Description" component={EventsScreen} />
          <Stack.Screen name="Committee Page" component={Committee} />
          <Stack.Screen name="Profile Page" component={Profile} />
          <Stack.Screen name="Co View Tasks" component={CoViewTask} />
          <Stack.Screen name="Core View Tasks" component={CoreViewTask} />
          <Stack.Screen name="Referral Count" component={ReferralCount} />
          <Stack.Screen name="Assign Tasks" component={AssignTask} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );*/

export default Navigator;

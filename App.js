import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import FriendsScreen from './components/FriendsScreen'
import { FriendsContext } from './context/FriendsContext';

const Stack = createStackNavigator();

export default function App() {
  const [currentFriends, setCurrentFriends] = useState([]);
  const possibleFriends = [
    'Alice',
    'Bob',
    'Sammy',
  ];


  const addFriend = (index) => {

    // Pull friend out of possibleFriends
    const addedFriend = possibleFriends.splice(index, 1)

    // Finally, update the app state
    setCurrentFriends([...currentFriends, addedFriend]);
  }

  return (
    <FriendsContext.Provider
      value={
        {
          currentFriends: currentFriends,
          possibleFriends: possibleFriends,
          addFriend: addFriend
        }
      }
    >
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Friends"
              component={FriendsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FriendsContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

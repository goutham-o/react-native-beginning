import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Screen from "./app/components/Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Links = () => {
  const navigation = useNavigation();
  return (
    <Button
      title='Click'
      onPress={() => navigation.navigate("TweetDetails", { id: 2 })}
    />
  );
};

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweet</Text>
    <Button
      title='View Tweet'
      onPress={() => navigation.navigate("TweetDetails", { id: 1 })}
    />
    <Links />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id} </Text>
  </Screen>
);
const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    initialRouteName='Tweets'
    screenOptions={{
      headerStyle: { backgroundColor: "tomato" },
      headerTintColor: "white",
      headerTitleAlign: "center",
    }}
  >
    <Stack.Screen
      name='Tweets'
      component={Tweets}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name='TweetDetails'
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    />
  </Stack.Navigator>
);

const Account = () => (
  <Screen>
    <Text>Account</Text>
  </Screen>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeBackgroundColor: "tomato",
      activeTintColor: "white",
      inactiveBackgroundColor: "#eee",
      inactiveTintColor: "black",
    }}
  >
    <Tab.Screen
      name='Feed'
      component={StackNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name='home' size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <TabNavigator />
    </NavigationContainer>
  );
}

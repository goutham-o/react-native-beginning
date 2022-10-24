import React from "react";
import { Button, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Screen from "./app/components/Screen";

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
      headerTitleAlign: 'center'
    }}
  >
    <Stack.Screen
      name='Tweets'
      component={Tweets}
      options={{
        headerShown: false,
      }}
    ></Stack.Screen>
    <Stack.Screen
      name='TweetDetails'
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.id })}
    ></Stack.Screen>
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

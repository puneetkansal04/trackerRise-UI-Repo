const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeYourSubs from "./screens/HomeYourSubs";
import HomeUpcomingBills from "./screens/HomeUpcomingBills";
import SpendingBudgets from "./screens/SpendingBudgets";
import Calendar from "./screens/Calendar";
import CreditCards from "./screens/CreditCards";
import Settings from "./screens/Settings";
import SubscriptionInfo from "./screens/SubscriptionInfo";
import NewSubscription from "./screens/NewSubscription";
import WelcomeScreen from "./screens/WelcomeScreen";
import Register1 from "./screens/Register1";
import Register2 from "./screens/Register2";
import Login from "./screens/Login";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="HomeYourSubs"
              component={HomeYourSubs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeUpcomingBills"
              component={HomeUpcomingBills}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpendingBudgets"
              component={SpendingBudgets}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Calendar"
              component={Calendar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CreditCards"
              component={CreditCards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SubscriptionInfo"
              component={SubscriptionInfo}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="NewSubscription"
              component={NewSubscription}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register1"
              component={Register1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register2"
              component={Register2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;

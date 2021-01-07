import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeContext } from "styled-components";
import getNameIconFromRoute from "./NavigationBar.utils";

import HomePage from "../HomePage/HomePage";
import SearchArtist from "../SearchArtist/SearchArtist";

const NavigationBar: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          headerMode="none"
          style={{ color: themeContext.colors.primary }}
        >
          <Stack.Screen name="Home">
            {() => (
              <Tab.Navigator
                initialRouteName="HomePage"
                screenOptions={({ route }) => ({
                  tabBarIcon: ({ color, size }) => (
                    <AntDesign
                      name={getNameIconFromRoute(route.name)}
                      size={size}
                      color={color}
                    />
                  )
                })}
                tabBarOptions={{
                  activeTintColor: themeContext.colors.white,
                  inactiveTintColor: themeContext.colors.lightGrey,
                  style: {
                    backgroundColor: themeContext.colors.secondary
                  }
                }}
              >
                <Tab.Screen name="Accueil" component={HomePage} />
                <Tab.Screen name="Recherche" component={SearchArtist} />
              </Tab.Navigator>
            )}
          </Stack.Screen>

          <Stack.Screen name="Settings" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationBar;

import React, { useContext } from "react";
import { AntDesign } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeContext } from "styled-components";
import getNameIconFromRoute from "./NavigationBar.utils";

import HomePage from "../../screens/HomePage/HomePage";
import SearchPage from "../../screens/SearchPage/SearchPage";
import Artistpage from "../../screens/Artistpage/Artistpage";
import AlbumPage from "../../screens/AlbumPage/AlbumPage";

const NavigationBar: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" headerMode="none">
          <Stack.Screen name="Home">
            {() => (
              <Tab.Navigator
                initialRouteName="Accueil"
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
                  showLabel: false,
                  activeTintColor: themeContext.colors.white,
                  inactiveTintColor: themeContext.colors.lightGrey,
                  style: {
                    backgroundColor: themeContext.colors.secondary,
                    minHeight: 50
                  }
                }}
              >
                <Tab.Screen name="Accueil" component={HomePage} />
                <Tab.Screen name="Recherche" component={SearchPage} />
                <Tab.Screen
                  name="Artiste"
                  options={{
                    tabBarVisible: true,
                    tabBarButton: () => null
                  }}
                  component={Artistpage}
                />
                <Tab.Screen
                  name="Album"
                  options={{
                    tabBarVisible: true,
                    tabBarButton: () => null
                  }}
                  component={AlbumPage}
                />
              </Tab.Navigator>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default NavigationBar;

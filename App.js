import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

//screens

import { Home } from "./screens/";

const theme ={
   ...DefaultTheme,
   colors: {
     ...DefaultTheme.colors,
     border: "transparent",
   }
}
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./navigation/DrawerNavigator";

import DisplayScreen from "./screens/DisplayScreen"
import Login from "./screens/login";

export default function App() {
  return (
    <DisplayScreen />
  );
}
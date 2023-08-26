import React from 'react';
import { ThemeProvider } from "styled-components";
import * as SplashScreen from 'expo-splash-screen';

import {
useFonts,
Poppins_400Regular,
Poppins_500Medium,
Poppins_700Bold
} from '@expo-google-fonts/poppins'

import { ResponseSearch } from './src/pages/response_search';
import { Home } from './src/pages/home';
import { Search } from './src/pages/search';
import theme from './src/global/styles/theme';
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/routes';


SplashScreen.preventAutoHideAsync()
export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    SplashScreen.hideAsync();
    return null;
  }

  return (
    <NativeBaseProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <AppRoutes/>
        </NavigationContainer>
      </ThemeProvider>
    </NativeBaseProvider>
  )
}


import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../pages/home";
import { Search } from "../pages/search";
import { ResponseSearch } from "../pages/response_search";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Navigator initialRouteName="Home"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="Search" component={Search} />
            <Screen name="ResponseSearch" component={ResponseSearch} />
        </Navigator>
    );
};
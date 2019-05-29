import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, createMaterialTopTabNavigator } from "react-navigation";

import TabBarIcon from "../components/TabBarIcon";
import Find from "../screens/Find/Find";
import MatchesList from "../screens/Matches/MatchesList";
import SettingsScreen from "../screens/Settings/SettingsScreen";

const FindStack = createStackNavigator({
  Find: Find
});

FindStack.navigationOptions = {
  tabBarLabel: "Find",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === "ios" ? `ios-information-circle${focused ? "" : "-outline"}` : "md-flame"
      }
    />
  )
};

const MatchesStack = createStackNavigator({
  Matches: MatchesList
});

MatchesStack.navigationOptions = {
  tabBarLabel: "Matches",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-link" : "md-people"} />
  )
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
});

SettingsStack.navigationOptions = {
  tabBarLabel: "Settings",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === "ios" ? "ios-options" : "md-options"} />
  )
};

const TabNavigatorConfig = {
  tabBarOptions: {
    // labelStyle: {
    //   fontSize: 12
    // },
    // tabStyle: {
    //   width: 100
    // },
    style: {
      // backgroundColor: "blue",
      height: 75,
      paddingTop: 25
    }
  }
};

export default createMaterialTopTabNavigator(
  {
    FindStack,
    MatchesStack,
    SettingsStack
  },
  TabNavigatorConfig
);

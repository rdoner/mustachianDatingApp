import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { WebBrowser } from "expo";
import TabBarIcon from "../../components/TabBarIcon";
import Colors from "../../constants/Colors";

import { MonoText } from "../../components/StyledText";

export default class MatchesShow extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const user = this.props.navigation.getParam("user");
    debugger;
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <Image
            style={styles.profileImg}
            source={{
              uri: user.avatar
            }}
            resizeMode="contain"
          />
          <View style={styles.userInfoContainer}>
            <Text style={styles.userInfoText}>{user.name}</Text>
            <Text style={styles.userInfoText}>{user.age}</Text>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          {/* <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

          <View style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>navigation/MainTabNavigator.js</MonoText>
          </View> */}
          <TabBarIcon
            color={Colors.noIcon}
            name={Platform.OS === "ios" ? "ios-link" : "md-close-circle"}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  contentContainer: {
    // paddingTop: 30
    //
  },
  profileImg: {
    height: 400,
    width: 400
  },
  userInfoContainer: {
    fontSize: 60
  },
  userInfoText: {
    fontSize: 60
  },
  developmentModeText: {
    marginBottom: 20,
    color: "rgba(0,0,0,0.4)",
    fontSize: 14,
    lineHeight: 19,
    textAlign: "center"
  },
  welcomeContainer: {
    alignItems: "center",
    marginTop: 10,
    marginBottom: 20
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: "contain",
    marginTop: 3,
    marginLeft: -10
  },
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50
  },
  homeScreenFilename: {
    marginVertical: 7
  },
  codeHighlightText: {
    color: "rgba(96,100,109, 0.8)"
  },
  codeHighlightContainer: {
    backgroundColor: "rgba(0,0,0,0.05)",
    borderRadius: 3,
    paddingHorizontal: 4
  },
  getStartedText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    lineHeight: 24,
    textAlign: "center"
  },
  tabBarInfoContainer: {
    position: "relative",
    // position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3
      },
      android: {
        elevation: 20
      }
    }),
    // alignItems: "center",
    backgroundColor: "#fbfbfb",
    paddingVertical: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  tabBarInfoText: {
    fontSize: 17,
    color: "rgba(96,100,109, 1)",
    textAlign: "center"
  },
  navigationFilename: {
    marginTop: 5
  },
  helpContainer: {
    marginTop: 15,
    alignItems: "center"
  },
  helpLink: {
    paddingVertical: 15
  },
  helpLinkText: {
    fontSize: 14,
    color: "#2e78b7"
  }
});

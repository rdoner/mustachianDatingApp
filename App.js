import React from "react";
// import { Platform, StatusBar, StyleSheet, View } from "react-native";
import {
  Platform,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Button,
  View
} from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import { withOAuth } from "aws-amplify-react-native";
import { default as Amplify } from "aws-amplify";
import { default as awsConfig } from "./aws-exports";

Amplify.configure(awsConfig);

// Amplify.configure({
//   Auth: {
//     oauth: {
//       // OAuth config...
//     }
//   }
// });

class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  render() {
    const {
      oAuthUser: user,
      oAuthError: error,
      hostedUISignIn,
      facebookSignIn,
      // googleSignIn,
      // amazonSignIn,
      // customProviderSignIn,
      signOut
    } = this.props;

    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
          <SafeAreaView style={styles.safeArea}>
            {user && <Button title="Sign Out" onPress={signOut} icon="logout" />}
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <Text>{JSON.stringify({ user, error }, null, 2)}</Text>
              {!user && (
                <React.Fragment>
                  {/* Go to the Cognito Hosted UI */}
                  <Button title="Cognito" onPress={hostedUISignIn} />

                  {/* Go directly to a configured identity provider */}
                  <Button title="Facebook" onPress={facebookSignIn} />
                  {/* <Button title="Google" onPress={googleSignIn} />
                  <Button title="Amazon" onPress={amazonSignIn} /> */}

                  {/* e.g. for OIDC providers */}
                  {/* <Button title="Yahoo" onPress={() => customProviderSignIn("Yahoo")} /> */}
                </React.Fragment>
              )}
            </ScrollView>
          </SafeAreaView>
          <AppNavigator />
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  safeArea: {
    flexGrow: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: "#FFFFFF"
  },
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default withOAuth(App);

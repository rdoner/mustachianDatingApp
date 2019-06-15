import React from "react";
import { Platform, StatusBar, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { AppLoading, Asset, Font, Icon } from "expo";
import AppNavigator from "./navigation/AppNavigator";
import Amplify, { Analytics, Auth, Storage, API } from "aws-amplify";
import awsmobile from "./aws-exports";
import { withAuthenticator, S3Album } from "aws-amplify-react-native";

Amplify.configure(awsmobile);
Storage.configure({ level: "private" });

class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  post = async () => {
    console.log("calling api");
    const response = await API.post("mustachianAPI", "/items", {
      body: {
        id: "3",
        first_name: "Ryan",
        last_name: "Doner",
        gender: "male",
        email: "rdoner@email.arizona.edu",
        location: "Boulder",
        photos: ["ryanelliotdoner.com"]
      }
    });
    alert(JSON.stringify(response, null, 2));
  };
  get = async () => {
    console.log("calling api");
    const response = await API.get("mustachianAPI", "/items/object/1");
    alert(JSON.stringify(response, null, 2));
  };
  list = async () => {
    console.log("calling api");
    const response = await API.get("mustachianMatchesAPI", "/matches/1");
    alert(JSON.stringify(response, null, 2));
  };

  uploadFile = evt => {
    const file = evt.target.files[0];
    const name = file.name;

    Storage.put(name, file).then(() => {
      this.setState({ file: name });
    });
  };

  componentDidMount() {
    Analytics.record("Amplify_CLI");
  }

  render() {
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
          <View className="App" style={{ marginTop: 20 }}>
            {/* <Text> Pick a file</Text>
            <input type="file" onChange={this.uploadFile} />
            <S3Album level="private" path="" /> */}
            <TouchableOpacity onPress={this.post}>
              <Text>POST</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.get}>
              <Text>GET</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.list}>
              <Text>LIST</Text>
            </TouchableOpacity>

            {/* <S3Album level="private" path="" /> */}
          </View>
          {Platform.OS === "ios" && <StatusBar barStyle="default" />}
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

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

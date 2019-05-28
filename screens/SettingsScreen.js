import React from "react";
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import { WebBrowser } from "expo";
import TabBarIcon from "../components/TabBarIcon";
import Colors from "../constants/Colors";
import { Input } from "react-native-elements";

const photosToDisplay = [
  {
    img: 1,
    src: ""
  }
];
export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  renderItem = item => {
    <Image
      style={styles.gridImg}
      source={require("../assets/images/mrMoneyMustache.jpg")}
      resizeMode="contain"
    />;
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          {/* <FlatList
            data={[1, 2]}
            style={styles.container}
            renderItem={({item}) => {
              <Image
                style={styles.gridImg}
                source={require("../assets/images/mrMoneyMustache.jpg")}
                resizeMode="contain"
              />
            }}
            numColumns={3}
          /> */}
          <FlatList
            data={[{ key: "a" }, { key: "b" }]}
            numColumns={3}
            renderItem={({ item }) => (
              <Image
                style={styles.gridImg}
                source={require("../assets/images/mrMoneyMustache.jpg")}
                resizeMode="contain"
              />
            )}
          />
          <View style={styles.userInfoContainer}>
            <Input style={styles.userInfoText} label="Name" placeholder="Ryan" />
            <Input style={styles.userInfoText} label="Age" placeholder="26" />
          </View>
        </ScrollView>
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
  },
  imgContainer: {
    flex: 1
  },
  gridImg: {
    height: 200,
    width: 200,
    padding: 2
  },
  userInfoContainer: {
    fontSize: 60
  },
  userInfoText: {
    fontSize: 60
  }
});

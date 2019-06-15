import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";
// import { navigation } from "react-navigation";
// import { API } from "aws-amplify";

export default class MatchesList extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  // async componentDidMount() {
  //   // const response = await this.list();
  //   debugger;
  //   // this.setState({ users: response });
  // }

  // list = async () => {
  //   console.log("calling api");
  //   const response = await API.get("mustachianAPI", "/items/1");
  //   alert(JSON.stringify(response, null, 2));
  //   return response;
  // };

  render() {
    // const { navigate } = this.props.navigation;
    // const { users } = this.state;
    debugger;
    const users = [
      {
        name: "Carl",
        avatar: "https://theblogblogdotblog.files.wordpress.com/2018/04/1500days.jpeg",
        age: 45
      },
      {
        name: "Brynn",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
      },
      {
        name: "Paula",
        avatar:
          "https://2gz00p44tlr52qejv22mr7p2-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/Paula-Pant-Afford-Anything-and-Will-Sisk-and-PT.jpg"
      },
      {
        name: "Carl",
        avatar: "https://theblogblogdotblog.files.wordpress.com/2018/04/1500days.jpeg"
      },
      {
        name: "Brynn",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"
      },
      {
        name: "Paula",
        avatar:
          "https://2gz00p44tlr52qejv22mr7p2-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/Paula-Pant-Afford-Anything-and-Will-Sisk-and-PT.jpg"
      }
    ];

    return (
      <ScrollView style={styles.container}>
        {users.map((user, i) => {
          return (
            <TouchableOpacity
              key={i}
              onPress={() => this.props.navigation.navigate("MatchesShow", { user })}
            >
              <Card containerStyle={{ padding: 0 }}>
                <ListItem
                  // key={i}
                  title={user.name}
                  leftAvatar={
                    <Avatar
                      rounded
                      source={{
                        uri: user.avatar
                      }}
                    />
                  }
                />
              </Card>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    backgroundColor: "#fff"
  }
});

import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Card, ListItem, Avatar } from "react-native-elements";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const users = [
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
        {users.map((u, i) => {
          return (
            <Card key={i} containerStyle={{ padding: 0 }}>
              <ListItem
                // key={i}
                title={u.name}
                leftAvatar={
                  <Avatar
                    rounded
                    source={{
                      uri: u.avatar
                    }}
                  />
                }
              />
            </Card>
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

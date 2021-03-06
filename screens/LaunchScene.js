"use strict";

import React, { Component } from "react";
import { View, Image } from "react-native";
import Button from "apsl-react-native-button";
import styles from "./LaunchScene.styles";
import { Actions } from "react-native-router-flux";
import AccountDetails from "./AccountDetails";

export default class LaunchScene extends Component {
  constructor(props) {
    super(props);
    this.navigator = this.props.navigator;
  }

  toNext(data) {
    if (this.navigator) {
      navigator.push(data);
    }
  }

  onFindServicesClick() {
    this.toNext({
      name: "FindServices",
      title: "Find Services",
      component: AccountDetails,
      passProps: {
        leftBtn: "Back"
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.bgWrapper}>
          <Image source={require("../Img/bg.png")} style={styles.bg} />
        </View>

        <Image source={require("../Img/logo.png")} style={styles.img} />

        <Button
          style={styles.btn}
          textStyle={{ fontSize: 18, color: "white", fontWeight: "bold" }}
          onPress={Actions.login}
        >
          Login
        </Button>
        <Button
          style={styles.btn}
          textStyle={{ fontSize: 18, color: "white", fontWeight: "bold" }}
          onPress={Actions.signUp}
        >
          Sign up
        </Button>
      </View>
    );
  }
}

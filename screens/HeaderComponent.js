import React from "react";
import { Text, Image } from "react-native";
import { Header, Left, Body, Right, Button } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "./HeaderComponent.styles";
import { Avatar } from "react-native-elements";

export const HeaderComponent = ({ logo, picture }) => {
  return (
    <Header style={{ backgroundColor: "#42b6f4" }} iosBarStyle="light-content">
      <Left>
        <Button transparent>
          <Icon name="bars" style={styles.icon} />
        </Button>
      </Left>
      <Body>
        {(logo && (
          <Image resizeMode="contain" style={styles.logo} source={logo} />
        )) || <Text style={styles.headerText}>nearby...</Text>}
      </Body>

      <Right>
        <Button transparent>
          <Avatar rounded source={{ uri: picture }} />
        </Button>
      </Right>
    </Header>
  );
};

export default HeaderComponent;

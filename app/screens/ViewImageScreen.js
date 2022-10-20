import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={[styles.icon, styles.closeIcon]}>
        <MaterialCommunityIcons name='close' color={colors.white} size={35} />
      </View>
      <View style={[styles.icon, styles.deleteIcon]}>
        <MaterialCommunityIcons name='trash-can-outline' color={colors.white} size={35} />
      </View>
      <Image
        resizeMode='contain'
        style={styles.image}
        source={require("../assets/chair.jpg")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  icon: {
    position: "absolute",
    top: 40,
  },
  closeIcon: {
    left: 30,
  },

  deleteIcon: {
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;

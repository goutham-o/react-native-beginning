import { Image, StyleSheet, TouchableHighlight, View } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import React from "react";
import AppText from "./AppText";
import colors from "../config/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const ListItem = ({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) => {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
          <View style={styles.container}>
            {IconComponent}
            {image && <Image style={styles.image} source={image} />}
            <View style={styles.detailsContainer}>
              <AppText style={styles.title}>{title}</AppText>
              {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
            </View>
            {/* <View style={{ width: 30, height: 30, backgroundColor: "green", alignSelf: 'center', position: 'absolute', right: 0 }} /> */}
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "600",
  },
  subTitle: {
    color: colors.medium,
  },
});

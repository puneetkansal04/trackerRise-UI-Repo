import * as React from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const SubscriptionInfo = () => {
  return (
    <View style={styles.subscriptionInfo}>
      <View style={[styles.bg, styles.bgPosition]} />
      <View style={[styles.lightBg, styles.bgPosition]} />
      <View style={[styles.spotifyLogo, styles.rectangleLayout]}>
        <View style={[styles.rectangle, styles.name1Position]} />
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame5.png")}
        />
      </View>
      <Text style={styles.spotify}>Spotify</Text>
      <Text style={styles.text}>$5.99</Text>
      <Text style={[styles.subscriptionInfo1, styles.spotify1Clr]}>
        Subscription info
      </Text>
      <Image
        style={[styles.iconsarrowDown, styles.iconstrashLayout]}
        resizeMode="cover"
        source={require("../assets/iconsarrow-down.png")}
      />
      <View style={[styles.details, styles.buttonPosition]}>
        <View style={styles.autoLayoutVertical}>
          <View style={styles.nameLayout}>
            <Text style={[styles.name1, styles.name1Typo]}>Name</Text>
            <View style={[styles.autoLayoutHorizontal, styles.buttonFlexBox]}>
              <Text style={[styles.spotify1, styles.spotify1Clr]}>Spotify</Text>
              <Image
                style={styles.iconsarrowMedium}
                resizeMode="cover"
                source={require("../assets/iconsarrow-medium1.png")}
              />
            </View>
          </View>
          <View style={[styles.description, styles.nameLayout]}>
            <Text style={[styles.name1, styles.name1Typo]}>Description</Text>
            <View style={[styles.autoLayoutHorizontal, styles.buttonFlexBox]}>
              <Text style={[styles.spotify1, styles.spotify1Clr]}>
                Music app
              </Text>
              <Image
                style={styles.iconsarrowMedium}
                resizeMode="cover"
                source={require("../assets/iconsarrow-medium1.png")}
              />
            </View>
          </View>
          <View style={[styles.description, styles.nameLayout]}>
            <Text style={[styles.name1, styles.name1Typo]}>Category</Text>
            <View style={[styles.autoLayoutHorizontal, styles.buttonFlexBox]}>
              <Text style={[styles.spotify1, styles.spotify1Clr]}>
                Enterteintment
              </Text>
              <Image
                style={styles.iconsarrowMedium}
                resizeMode="cover"
                source={require("../assets/iconsarrow-medium1.png")}
              />
            </View>
          </View>
          <View style={[styles.description, styles.nameLayout]}>
            <Text style={[styles.name1, styles.name1Typo]}>First payment</Text>
            <View style={[styles.autoLayoutHorizontal, styles.buttonFlexBox]}>
              <Text style={[styles.spotify1, styles.spotify1Clr]}>
                08.01.2022
              </Text>
              <Image
                style={styles.iconsarrowMedium}
                resizeMode="cover"
                source={require("../assets/iconsarrow-medium1.png")}
              />
            </View>
          </View>
          <View style={[styles.description, styles.nameLayout]}>
            <Text style={[styles.name1, styles.name1Typo]}>Reminder</Text>
            <View style={[styles.autoLayoutHorizontal, styles.buttonFlexBox]}>
              <Text style={[styles.spotify1, styles.spotify1Clr]}>Never</Text>
              <Image
                style={styles.iconsarrowMedium}
                resizeMode="cover"
                source={require("../assets/iconsarrow-medium1.png")}
              />
            </View>
          </View>
          <View style={[styles.description, styles.nameLayout]}>
            <Text style={[styles.name1, styles.name1Typo]}>Currency</Text>
            <View style={[styles.autoLayoutHorizontal, styles.buttonFlexBox]}>
              <Text style={[styles.spotify1, styles.spotify1Clr]}>USD ($)</Text>
              <Image
                style={styles.iconsarrowMedium}
                resizeMode="cover"
                source={require("../assets/iconsarrow-medium1.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <Text style={styles.name1Typo}>Save</Text>
      </View>
      <Image
        style={[styles.iconstrash, styles.iconstrashLayout]}
        resizeMode="cover"
        source={require("../assets/iconstrash.png")}
      />
      <Image
        style={styles.dividerIcon}
        resizeMode="cover"
        source={require("../assets/divider.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: 24,
    right: 23,
    top: 24,
    position: "absolute",
  },
  rectangleLayout: {
    height: 106,
    width: 106,
  },
  name1Position: {
    left: 0,
    position: "absolute",
  },
  spotify1Clr: {
    letterSpacing: 0,
    color: Color.greyscaleGrey30,
  },
  iconstrashLayout: {
    height: 24,
    width: 24,
    top: 56,
    position: "absolute",
    overflow: "hidden",
  },
  buttonPosition: {
    width: 288,
    marginLeft: -143.5,
    left: "50%",
  },
  name1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    color: Color.greyscaleWhite,
  },
  buttonFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  nameLayout: {
    height: 32,
    alignSelf: "stretch",
  },
  bg: {
    bottom: 22,
    borderRadius: Border.br_5xl,
    backgroundColor: "#282833",
  },
  lightBg: {
    bottom: 454,
    borderTopLeftRadius: Border.br_5xl,
    borderTopRightRadius: Border.br_5xl,
    backgroundColor: Color.greyscaleGrey70,
  },
  rectangle: {
    top: 0,
    borderRadius: 32,
    backgroundColor: Color.colorLimegreen,
    height: 106,
    width: 106,
  },
  frameIcon: {
    left: 21,
    width: 61,
    height: 61,
    top: 24,
    position: "absolute",
    overflow: "hidden",
  },
  spotifyLogo: {
    marginLeft: -53.5,
    top: 114,
    left: "50%",
    width: 106,
    position: "absolute",
  },
  spotify: {
    marginLeft: -57.5,
    top: 236,
    fontSize: FontSize.h6_size,
    lineHeight: 48,
    textAlign: "center",
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h7,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  text: {
    marginLeft: -29.5,
    top: 284,
    fontSize: FontSize.h4_size,
    lineHeight: 32,
    textAlign: "right",
    color: Color.greyscaleGrey30,
    fontFamily: FontFamily.h7,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  subscriptionInfo1: {
    marginLeft: -65.5,
    fontSize: FontSize.bodyLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLarge,
    top: 56,
    letterSpacing: 0,
    textAlign: "center",
    left: "50%",
    position: "absolute",
  },
  iconsarrowDown: {
    left: 52,
  },
  name1: {
    marginTop: -10,
    top: "50%",
    left: 0,
    position: "absolute",
  },
  spotify1: {
    fontSize: FontSize.h1_size,
    lineHeight: 16,
    fontWeight: "500",
    fontFamily: FontFamily.bodySmall,
    textAlign: "right",
  },
  iconsarrowMedium: {
    width: 12,
    height: 12,
    marginLeft: 8,
    overflow: "hidden",
  },
  autoLayoutHorizontal: {
    marginTop: -8,
    right: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
    top: "50%",
  },
  description: {
    marginTop: 16,
  },
  autoLayoutVertical: {
    alignSelf: "stretch",
  },
  details: {
    top: 386,
    borderRadius: Border.br_base,
    backgroundColor: Color.colorDimgray_200,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    position: "absolute",
  },
  button: {
    top: 722,
    borderRadius: Border.br_980xl,
    backgroundColor: Color.colorGray_100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_sm,
    width: 288,
    marginLeft: -143.5,
    left: "50%",
  },
  iconstrash: {
    right: 51,
  },
  dividerIcon: {
    top: 343,
    left: 11,
    width: 355,
    height: 27,
    position: "absolute",
  },
  subscriptionInfo: {
    backgroundColor: Color.greyscaleGray100,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default SubscriptionInfo;

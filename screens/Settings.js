import * as React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";

const Settings = () => {
  return (
    <View style={styles.settings}>
      <View style={[styles.buttonsmall, styles.buttonsmallFlexBox]}>
        <Text style={[styles.editProfile, styles.johnDoeClr]}>
          Edit profile
        </Text>
      </View>
      <Text style={[styles.jdoegmailcom, styles.faceidClr]}>
        j.doe@gmail.com
      </Text>
      <Text style={[styles.johnDoe, styles.johnDoeClr]}>John Doe</Text>
      <View style={styles.avatar}>
        <Image
          style={styles.imageIcon}
          resizeMode="cover"
          source={require("../assets/image4.png")}
        />
      </View>
      <Text style={[styles.settings1, styles.faceidClr]}>Settings</Text>
      <Image
        style={[styles.iconsback, styles.iconsbackLayout]}
        resizeMode="cover"
        source={require("../assets/iconsback.png")}
      />
      <View style={styles.general}>
        <Text style={styles.general1Typo}>General</Text>
        <View style={styles.autoLayoutVertical}>
          <View>
            <View style={styles.frameLayout}>
              <Text style={[styles.security1, styles.security1Position]}>
                Security
              </Text>
              <Image
                style={[styles.iconsfaceid, styles.security1Position]}
                resizeMode="cover"
                source={require("../assets/iconsfaceid.png")}
              />
              <View
                style={[styles.autoLayoutHorizontal, styles.buttonsmallFlexBox]}
              >
                <Text style={[styles.faceid, styles.faceidClr]}>FaceID</Text>
                <Image
                  style={styles.iconsarrowMedium}
                  resizeMode="cover"
                  source={require("../assets/iconsarrow-medium.png")}
                />
              </View>
            </View>
            <View style={[styles.frame, styles.frameLayout]}>
              <Text style={[styles.security1, styles.security1Position]}>
                iCloud Sync
              </Text>
              <Image
                style={[styles.switchIcon, styles.iconsbackLayout]}
                resizeMode="cover"
                source={require("../assets/switch.png")}
              />
              <Image
                style={[styles.iconsfaceid, styles.security1Position]}
                resizeMode="cover"
                source={require("../assets/iconsicloud.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.mySubscriptions}>
        <Text style={styles.general1Typo}>My subscriptions</Text>
        <View style={styles.autoLayoutVertical}>
          <View>
            <View style={styles.frameLayout}>
              <Text style={[styles.security1, styles.security1Position]}>
                Sorting
              </Text>
              <View
                style={[styles.autoLayoutHorizontal, styles.buttonsmallFlexBox]}
              >
                <Text style={[styles.faceid, styles.faceidClr]}>Date</Text>
                <Image
                  style={styles.iconsarrowMedium}
                  resizeMode="cover"
                  source={require("../assets/iconsarrow-medium.png")}
                />
              </View>
              <Image
                style={[styles.iconsfaceid, styles.security1Position]}
                resizeMode="cover"
                source={require("../assets/iconssorting.png")}
              />
            </View>
            <View style={[styles.frame, styles.frameLayout]}>
              <Text style={[styles.security1, styles.security1Position]}>
                Summary
              </Text>
              <View
                style={[styles.autoLayoutHorizontal, styles.buttonsmallFlexBox]}
              >
                <Text style={[styles.faceid, styles.faceidClr]}>Average</Text>
                <Image
                  style={styles.iconsarrowMedium}
                  resizeMode="cover"
                  source={require("../assets/iconsarrow-medium1.png")}
                />
              </View>
              <Image
                style={[styles.iconsfaceid, styles.security1Position]}
                resizeMode="cover"
                source={require("../assets/iconschart.png")}
              />
            </View>
            <View style={[styles.frame, styles.frameLayout]}>
              <Text style={[styles.security1, styles.security1Position]}>
                Default currency
              </Text>
              <View
                style={[styles.autoLayoutHorizontal, styles.buttonsmallFlexBox]}
              >
                <Text style={[styles.faceid, styles.faceidClr]}>USD ($)</Text>
                <Image
                  style={styles.iconsarrowMedium}
                  resizeMode="cover"
                  source={require("../assets/iconsarrow-medium1.png")}
                />
              </View>
              <Image
                style={[styles.iconsfaceid, styles.security1Position]}
                resizeMode="cover"
                source={require("../assets/iconsmoney.png")}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.appearance}>
        <Text style={styles.general1Typo}>Appearance</Text>
        <View style={styles.autoLayoutVertical}>
          <View>
            <View style={styles.frameLayout}>
              <Text style={[styles.security1, styles.security1Position]}>
                App icon
              </Text>
              <View
                style={[styles.autoLayoutHorizontal, styles.buttonsmallFlexBox]}
              >
                <Text style={[styles.faceid, styles.faceidClr]}>Default</Text>
                <Image
                  style={styles.iconsarrowMedium}
                  resizeMode="cover"
                  source={require("../assets/iconsarrow-medium1.png")}
                />
              </View>
              <Image
                style={[styles.iconsfaceid, styles.security1Position]}
                resizeMode="cover"
                source={require("../assets/iconsapp-icon.png")}
              />
            </View>
            <View style={[styles.frame, styles.frameLayout]}>
              <Text style={[styles.security1, styles.security1Position]}>
                Theme
              </Text>
              <View
                style={[styles.autoLayoutHorizontal, styles.buttonsmallFlexBox]}
              >
                <Text style={[styles.faceid, styles.faceidClr]}>Dark</Text>
                <Image
                  style={styles.iconsarrowMedium}
                  resizeMode="cover"
                  source={require("../assets/iconsarrow-medium1.png")}
                />
              </View>
              <Image
                style={[styles.iconsfaceid, styles.security1Position]}
                resizeMode="cover"
                source={require("../assets/iconslight-theme.png")}
              />
            </View>
            <View style={[styles.frame, styles.frameLayout]}>
              <Text style={[styles.security1, styles.security1Position]}>
                Font
              </Text>
              <View
                style={[styles.autoLayoutHorizontal, styles.buttonsmallFlexBox]}
              >
                <Text style={[styles.faceid, styles.faceidClr]}>Inter</Text>
                <Image
                  style={styles.iconsarrowMedium}
                  resizeMode="cover"
                  source={require("../assets/iconsarrow-medium1.png")}
                />
              </View>
              <Image
                style={[styles.iconsfaceid, styles.security1Position]}
                resizeMode="cover"
                source={require("../assets/iconsfont.png")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsmallFlexBox: {
    alignItems: "center",
    position: "absolute",
  },
  johnDoeClr: {
    color: Color.greyscaleWhite,
    textAlign: "center",
  },
  faceidClr: {
    color: Color.greyscaleGrey30,
    letterSpacing: 0,
  },
  iconsbackLayout: {
    height: 24,
    position: "absolute",
  },
  security1Position: {
    top: 6,
    position: "absolute",
  },
  frameLayout: {
    height: 32,
    width: 287,
  },
  editProfile: {
    textAlign: "center",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    color: Color.greyscaleWhite,
  },
  buttonsmall: {
    marginLeft: -43.5,
    top: 240,
    backgroundColor: Color.colorGray_100,
    justifyContent: "center",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    borderRadius: Border.br_base,
    left: "50%",
  },
  jdoegmailcom: {
    top: 208,
    left: 137,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    color: Color.greyscaleGrey30,
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    textAlign: "center",
    position: "absolute",
  },
  johnDoe: {
    top: 176,
    left: 142,
    fontSize: FontSize.h4_size,
    lineHeight: 32,
    fontWeight: "700",
    fontFamily: FontFamily.h7,
    textAlign: "center",
    position: "absolute",
  },
  imageIcon: {
    height: "240.28%",
    width: "190.28%",
    top: "0%",
    right: "-90.28%",
    bottom: "-140.28%",
    left: "0%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  avatar: {
    marginLeft: -35.5,
    top: 96,
    borderRadius: Border.br_980xl,
    width: 72,
    height: 72,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  settings1: {
    left: 155,
    fontSize: FontSize.bodyLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLarge,
    top: 32,
    color: Color.greyscaleGrey30,
    letterSpacing: 0,
    textAlign: "center",
    position: "absolute",
  },
  iconsback: {
    width: 24,
    left: 24,
    top: 32,
    overflow: "hidden",
  },
  general1Typo: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
  },
  security1: {
    marginLeft: -103.5,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    color: Color.greyscaleWhite,
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    left: "50%",
  },
  iconsfaceid: {
    left: 0,
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  faceid: {
    textAlign: "right",
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    color: Color.greyscaleGrey30,
    letterSpacing: 0,
    lineHeight: 16,
    fontSize: FontSize.h1_size,
  },
  iconsarrowMedium: {
    width: 12,
    height: 12,
    marginLeft: 8,
    overflow: "hidden",
  },
  autoLayoutHorizontal: {
    marginTop: -8,
    top: "50%",
    right: 0,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  switchIcon: {
    top: 4,
    left: 243,
    width: 44,
  },
  frame: {
    marginTop: 16,
  },
  autoLayoutVertical: {
    backgroundColor: Color.colorDimgray_200,
    width: 328,
    paddingHorizontal: Padding.p_xl,
    paddingVertical: Padding.p_base,
    marginTop: 8,
    borderRadius: Border.br_base,
  },
  general: {
    top: 296,
    left: 24,
    position: "absolute",
  },
  mySubscriptions: {
    top: 460,
    left: 24,
    position: "absolute",
  },
  appearance: {
    top: 672,
    left: 24,
    position: "absolute",
  },
  settings: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Settings;

import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Border, Color, FontFamily, FontSize, Padding } from "../GlobalStyles";

const Calendar = () => {
  return (
    <View style={styles.calendar}>
      <View style={styles.onedrive}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Text style={[styles.microsoftOnedrive, styles.januaryClr]}>
          Microsoft OneDrive
        </Text>
        <Text style={[styles.text, styles.textTypo1]}>$29.99</Text>
        <Image
          style={styles.onedriveLogoIcon}
          resizeMode="cover"
          source={require("../assets/onedrive-logo.png")}
        />
      </View>
      <View style={[styles.youtubePremium, styles.spotifyPosition]}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Text style={[styles.text, styles.textTypo1]}>$18.99</Text>
        <Text style={[styles.youtubePremium1, styles.januaryClr]}>
          YouTube Premium
        </Text>
        <Image
          style={styles.onedriveLogoIcon}
          resizeMode="cover"
          source={require("../assets/yt-premium-lgoo.png")}
        />
      </View>
      <View style={[styles.spotify, styles.spotifyPosition]}>
        <View style={[styles.bg, styles.bgPosition]} />
        <Text style={[styles.text, styles.textTypo1]}>$5.99</Text>
        <Text style={[styles.spotify1, styles.januaryClr]}>Spotify</Text>
        <View style={styles.onedriveLogoIcon}>
          <View style={styles.rectangle} />
          <Image
            style={styles.frameIcon}
            resizeMode="cover"
            source={require("../assets/frame1.png")}
          />
        </View>
      </View>
      <LinearGradient
        style={[styles.shadow, styles.shadowPosition]}
        locations={[0, 0.59]}
        colors={["rgba(28, 28, 35, 0)", "#1c1c23"]}
        useAngle={true}
        angle={180}
      />
      <Text style={[styles.inUpcomingBills, styles.text4Typo]}>
        in upcoming bills
      </Text>
      <Text style={[styles.text3, styles.text3FlexBox]}>$24.98</Text>
      <Text style={[styles.text4, styles.text4Typo]}>01.08.2022</Text>
      <Text style={[styles.january, styles.text3Typo]}>January</Text>
      <View style={[styles.lightBg, styles.shadowPosition]} />
      <View style={styles.daysBadges}>
        <View style={styles.moLayout}>
          <View style={[styles.rectangle1, styles.bgPosition]} />
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.text5, styles.textTypo]}>08</Text>
          <Text style={[styles.mo1, styles.mo1Typo]}>Mo</Text>
        </View>
        <View style={[styles.tu, styles.moLayout]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <Text style={[styles.text5, styles.textTypo]}>09</Text>
          <Text style={[styles.tu1, styles.mo1Typo]}>Tu</Text>
        </View>
        <View style={[styles.tu, styles.moLayout]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <Text style={[styles.text7, styles.textTypo]}>10</Text>
          <Text style={[styles.tu1, styles.mo1Typo]}>We</Text>
        </View>
        <View style={[styles.tu, styles.moLayout]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <Text style={[styles.text8, styles.textTypo]}>11</Text>
          <Text style={[styles.tu1, styles.mo1Typo]}>Th</Text>
        </View>
        <View style={[styles.tu, styles.moLayout]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <Text style={[styles.text9, styles.textTypo]}>12</Text>
          <Text style={[styles.tu1, styles.mo1Typo]}>Fr</Text>
        </View>
        <View style={[styles.tu, styles.moLayout]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <Text style={[styles.text9, styles.textTypo]}>13</Text>
          <Text style={[styles.tu1, styles.mo1Typo]}>Sa</Text>
        </View>
        <View style={[styles.tu, styles.moLayout]}>
          <View style={[styles.bg, styles.bgPosition]} />
          <Text style={[styles.text7, styles.textTypo]}>14</Text>
          <Text style={[styles.tu1, styles.mo1Typo]}>Su</Text>
        </View>
      </View>
      <Text style={[styles.subscriptionsForToday, styles.spotify1Typo]}>
        3 subscriptions for today
      </Text>
      <View style={[styles.drowdown, styles.drowdownPosition]}>
        <Text style={[styles.january1, styles.text3FlexBox]}>January</Text>
        <Image
          style={styles.iconsarrowSmall}
          resizeMode="cover"
          source={require("../assets/iconsarrow-small.png")}
        />
      </View>
      <Text style={[styles.subsSchedule, styles.drowdownPosition]}>{`Subs
Schedule`}</Text>
      <Text style={[styles.calendar1, styles.calendar1Position]}>Calendar</Text>
      <Image
        style={[styles.iconssettings, styles.calendar1Position]}
        resizeMode="cover"
        source={require("../assets/iconssettings1.png")}
      />
      <Image
        style={[styles.bottomBarIcon, styles.shadowPosition]}
        resizeMode="cover"
        source={require("../assets/bottom-bar3.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  bgPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    borderRadius: Border.br_base,
    position: "absolute",
    width: "100%",
  },
  januaryClr: {
    color: Color.greyscaleWhite,
    textAlign: "left",
  },
  textTypo1: {
    fontFamily: FontFamily.h7,
    fontWeight: "700",
    textAlign: "left",
    color: Color.greyscaleWhite,
  },
  spotifyPosition: {
    top: 482,
    height: 168,
    width: 160,
    position: "absolute",
  },
  shadowPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  text4Typo: {
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    top: 442,
    color: Color.greyscaleGrey30,
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.h1_size,
    textAlign: "left",
    position: "absolute",
  },
  text3FlexBox: {
    textAlign: "right",
    color: Color.greyscaleWhite,
  },
  text3Typo: {
    top: 410,
    fontFamily: FontFamily.h7,
    fontWeight: "700",
    lineHeight: 32,
    fontSize: FontSize.h4_size,
    position: "absolute",
  },
  textTypo: {
    top: 8,
    textAlign: "center",
    left: "50%",
    fontFamily: FontFamily.h7,
    fontWeight: "700",
    lineHeight: 32,
    fontSize: FontSize.h4_size,
    color: Color.greyscaleWhite,
    position: "absolute",
  },
  mo1Typo: {
    bottom: 49,
    textAlign: "center",
    left: "50%",
    color: Color.greyscaleGrey30,
    fontFamily: FontFamily.bodySmall,
    fontWeight: "500",
    lineHeight: 16,
    letterSpacing: 0,
    fontSize: FontSize.h1_size,
    position: "absolute",
  },
  moLayout: {
    height: 103,
    width: 48,
  },
  spotify1Typo: {
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    position: "absolute",
  },
  drowdownPosition: {
    top: "50%",
    position: "absolute",
  },
  calendar1Position: {
    top: 32,
    position: "absolute",
  },
  bg: {
    backgroundColor: Color.colorDimgray_200,
    borderRadius: Border.br_base,
  },
  microsoftOnedrive: {
    width: 128,
    textAlign: "left",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    position: "absolute",
    left: 16,
    top: 100,
    color: Color.greyscaleWhite,
  },
  text: {
    bottom: 11,
    left: 15,
    lineHeight: 32,
    fontSize: FontSize.h4_size,
    fontFamily: FontFamily.h7,
    fontWeight: "700",
    position: "absolute",
  },
  onedriveLogoIcon: {
    top: 16,
    height: 40,
    width: 40,
    left: 16,
    position: "absolute",
  },
  onedrive: {
    top: 658,
    height: 168,
    width: 160,
    left: 24,
    position: "absolute",
  },
  youtubePremium1: {
    textAlign: "left",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    position: "absolute",
    left: 16,
    top: 100,
    color: Color.greyscaleWhite,
  },
  youtubePremium: {
    left: 192,
  },
  spotify1: {
    width: 51,
    textAlign: "left",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.h2_size,
    position: "absolute",
    left: 16,
    top: 100,
    color: Color.greyscaleWhite,
  },
  rectangle: {
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLimegreen,
    left: 0,
    top: 0,
    height: 40,
    width: 40,
    position: "absolute",
  },
  frameIcon: {
    top: 9,
    left: 8,
    width: 23,
    height: 23,
    position: "absolute",
    overflow: "hidden",
  },
  spotify: {
    left: 24,
  },
  shadow: {
    top: 660,
    height: 152,
    backgroundColor: "transparent",
  },
  inUpcomingBills: {
    left: 251,
    color: Color.greyscaleGrey30,
  },
  text3: {
    left: 280,
    top: 410,
    fontFamily: FontFamily.h7,
    fontWeight: "700",
    lineHeight: 32,
    fontSize: FontSize.h4_size,
    position: "absolute",
  },
  text4: {
    color: Color.greyscaleGrey30,
    left: 24,
  },
  january: {
    textAlign: "left",
    color: Color.greyscaleWhite,
    left: 24,
  },
  lightBg: {
    borderBottomRightRadius: Border.br_5xl,
    borderBottomLeftRadius: Border.br_5xl,
    backgroundColor: Color.greyscaleGrey70,
    height: 386,
    opacity: 0.5,
    top: 0,
    width: 375,
  },
  rectangle1: {
    backgroundColor: Color.colorDimgray_100,
    borderRadius: Border.br_base,
  },
  vectorIcon: {
    marginLeft: -3,
    bottom: 16,
    borderRadius: Border.br_4xs,
    width: 6,
    height: 6,
    left: "50%",
    position: "absolute",
  },
  text5: {
    textAlign: "center",
    marginLeft: -13,
  },
  mo1: {
    marginLeft: -9,
  },
  tu1: {
    width: 27,
    marginLeft: -13,
  },
  tu: {
    marginLeft: 8,
  },
  text7: {
    marginLeft: -12,
    textAlign: "center",
  },
  text8: {
    marginLeft: -10,
    textAlign: "center",
  },
  text9: {
    marginLeft: -11,
    textAlign: "center",
  },
  daysBadges: {
    top: 251,
    flexDirection: "row",
    left: 24,
    position: "absolute",
  },
  subscriptionsForToday: {
    top: 201,
    color: Color.greyscaleGrey30,
    textAlign: "left",
    left: 24,
  },
  january1: {
    lineHeight: 16,
    fontSize: FontSize.h1_size,
    textAlign: "right",
    fontFamily: FontFamily.h1,
    fontWeight: "600",
  },
  iconsarrowSmall: {
    width: 12,
    height: 12,
    marginLeft: 6,
    overflow: "hidden",
  },
  drowdown: {
    marginTop: -211,
    right: 23,
    backgroundColor: Color.colorGray_100,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    flexDirection: "row",
    borderRadius: Border.br_base,
  },
  subsSchedule: {
    marginTop: -307,
    marginLeft: -163.5,
    fontSize: FontSize.h7_size,
    lineHeight: 40,
    left: "50%",
    fontFamily: FontFamily.h7,
    fontWeight: "700",
    textAlign: "left",
    color: Color.greyscaleWhite,
  },
  calendar1: {
    left: 152,
    fontSize: FontSize.bodyLarge_size,
    lineHeight: 24,
    fontFamily: FontFamily.bodyLarge,
    textAlign: "center",
    color: Color.greyscaleGrey30,
    letterSpacing: 0,
    top: 32,
  },
  iconssettings: {
    left: 328,
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  bottomBarIcon: {
    top: 713,
    height: 99,
  },
  calendar: {
    backgroundColor: Color.greyscaleGrey80,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default Calendar;
